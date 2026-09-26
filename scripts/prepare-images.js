const fs = require('fs')
const crypto = require('crypto')
const os = require('os')
const path = require('path')
const sharp = require('sharp')

require = require('esm')(module)
const slideList = require('../src/data/slides').default
const newspaperList = require('../src/data/newspapers').default
const { postList } = require('../src/data/posts')

const ROOT = path.resolve(__dirname, '..')
const STATIC_DIR = path.join(ROOT, 'static')
const SLIDE_DIR = path.join(STATIC_DIR, 'generated', 'slides')
const NEWS_DIR = path.join(STATIC_DIR, 'generated', 'news')
const SITE_DIR = path.join(STATIC_DIR, 'generated', 'site')
const IMAGE_MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'generated-images.json')

const SLIDE_COUNT = 5
const SLIDE_WIDTHS = [480, 960, 1440]
// Single reading-width derivative per newspaper page: small enough to prefetch a
// whole issue, while zooming falls back to the full-resolution original.
const NEWS_WIDTH = 1200
const DEFAULT_PAGE_COUNT = 8

const stats = { generated: 0, cached: 0, missing: 0 }
const imageManifest = {}

const featureImageUrls = [
  '/연원.jpg',
  '/장흥연수원기증.jpg',
  '/정기총회.jpeg',
  '/news/139-1.jpg',
  '/신문단체.jpg',
  '/이사회22.JPG',
  '/왕위전2.jpg',
  '/news/130main.jpg',
  '/종문회빌딩.jpeg',
  '/회장추임.jpeg',
  '/고씨마크.png',
  '/장학임원.jpeg',
  '/고을나왕.jpg',
  '/고말로.jpg',
  '/삼성혈.jpeg',
  '/유래.jpg',
  '/문충공파.jpeg',
  '/삼성혈.jpg',
  '/제18회탐라국.jpg',
  '/종훈.jpg',
]

const contentImageUrls = [
  '/중앙임원4.jpg',
  '/장학임원.jpeg',
  '/고재갑회장왕.jpg',
  '/고말로.jpg',
  '/왕위전2.jpg',
  '/고을나왕.jpg',
  '/삼성혈.jpg',
  '/종문회빌딩.jpg',
  '/지도1.png',
  '/지도2.png',
  '/고씨마크.png',
  '/연원.jpg',
  '/유래.jpg',
  '/종훈.jpg',
]

const addProfile = (profiles, sourceUrl, profile) => {
  if (!sourceUrl) return
  const normalizedUrl = sourceUrl.startsWith('/') ? sourceUrl : `/${sourceUrl}`
  if (!profiles.has(normalizedUrl)) profiles.set(normalizedUrl, new Set())
  profiles.get(normalizedUrl).add(profile)
}

const generatedImageName = sourceUrl =>
  crypto.createHash('sha1').update(sourceUrl).digest('hex').slice(0, 12)

const profileSizes = {
  card: [
    { width: 400, height: 267 },
    { width: 800, height: 533 },
  ],
  feature: [
    { width: 400, height: 250 },
    { width: 800, height: 500 },
  ],
  content: [
    { width: 800 },
    { width: 1400 },
  ],
}

const isUpToDate = (sourcePath, outputPath) => {
  if (!fs.existsSync(outputPath)) return false
  return fs.statSync(outputPath).mtimeMs >= fs.statSync(sourcePath).mtimeMs
}

async function renderVariant(sourcePath, outputPath, width, quality, options = {}) {
  if (isUpToDate(sourcePath, outputPath)) {
    stats.cached += 1
    return
  }

  const pipeline = sharp(sourcePath).rotate()
  const resizeOptions = options.height
    ? {
        width,
        height: options.height,
        fit: 'cover',
        position: 'centre',
        withoutEnlargement: true,
      }
    : { width, withoutEnlargement: true }

  await pipeline
    .resize(resizeOptions)
    .webp({ quality, effort: 4 })
    .toFile(outputPath)

  stats.generated += 1
}

function buildTaskList() {
  const tasks = []
  const siteProfiles = new Map()

  slideList.slice(0, SLIDE_COUNT).forEach((slide, index) => {
    const sourceUrl = slide.type === 'post' ? slide.image : slide.newsImage
    const sourcePath = path.join(STATIC_DIR, sourceUrl.replace(/^\//, ''))

    if (!fs.existsSync(sourcePath)) {
      stats.missing += 1
      return
    }

    SLIDE_WIDTHS.forEach(width => {
      tasks.push({
        sourcePath,
        outputPath: path.join(SLIDE_DIR, `slide-${index + 1}-${width}.webp`),
        width,
        height: Math.round((width * 10) / 16),
        quality: 76,
      })
    })
  })

  newspaperList.forEach(paper => {
    const pageCount = paper.newsFirstOnly ? 1 : paper.newsNumPages || DEFAULT_PAGE_COUNT
    const imageType = paper.newsImageType ?? 'jpg'

    for (let page = 1; page <= pageCount; page += 1) {
      const sourcePath = path.join(
        STATIC_DIR,
        'news',
        `${paper.newsNumber}-${page}.${imageType}`
      )

      if (!fs.existsSync(sourcePath)) {
        stats.missing += 1
        continue
      }

      tasks.push({
        sourcePath,
        outputPath: path.join(NEWS_DIR, `${paper.newsNumber}-${page}.webp`),
        width: NEWS_WIDTH,
        quality: 78,
      })
    }
  })

  postList.forEach(post => {
    addProfile(siteProfiles, post.image, 'card')
    addProfile(siteProfiles, post.image, 'content')
    addProfile(siteProfiles, post.imageTwo, 'content')
  })

  newspaperList.forEach(paper => {
    addProfile(siteProfiles, paper.newsImage, 'card')
  })

  featureImageUrls.forEach(sourceUrl =>
    addProfile(siteProfiles, sourceUrl, 'feature')
  )
  contentImageUrls.forEach(sourceUrl =>
    addProfile(siteProfiles, sourceUrl, 'content')
  )

  siteProfiles.forEach((profiles, sourceUrl) => {
    const sourcePath = path.join(STATIC_DIR, sourceUrl.replace(/^\//, ''))
    if (!fs.existsSync(sourcePath)) {
      stats.missing += 1
      return
    }

    const key = generatedImageName(sourceUrl)
    imageManifest[sourceUrl] = {}

    profiles.forEach(profile => {
      const variants = profileSizes[profile]
      const manifestVariants = []

      variants.forEach(({ width, height }) => {
        const fileName = `${profile}-${key}-${width}.webp`
        const generatedUrl = `/generated/site/${fileName}`
        manifestVariants.push({ width, url: generatedUrl })
        tasks.push({
          sourcePath,
          outputPath: path.join(SITE_DIR, fileName),
          width,
          height,
          quality: profile === 'content' ? 78 : 74,
        })
      })

      imageManifest[sourceUrl][profile] = {
        src: manifestVariants[manifestVariants.length - 1].url,
        srcSet: manifestVariants
          .map(variant => `${variant.url} ${variant.width}w`)
          .join(', '),
      }
    })
  })

  return tasks
}

async function runTasks(tasks) {
  const concurrency = Math.max(2, Math.min(os.cpus().length, 8))
  let cursor = 0

  const workers = Array.from({ length: concurrency }, async () => {
    while (cursor < tasks.length) {
      const task = tasks[cursor]
      cursor += 1
      await renderVariant(task.sourcePath, task.outputPath, task.width, task.quality, {
        height: task.height,
      })
    }
  })

  await Promise.all(workers)
}

async function main() {
  fs.mkdirSync(SLIDE_DIR, { recursive: true })
  fs.mkdirSync(NEWS_DIR, { recursive: true })
  fs.mkdirSync(SITE_DIR, { recursive: true })

  const tasks = buildTaskList()
  const startedAt = Date.now()
  await runTasks(tasks)
  fs.writeFileSync(
    IMAGE_MANIFEST_PATH,
    `${JSON.stringify(imageManifest, null, 2)}\n`
  )

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1)
  console.log(
    `Images ready in ${elapsed}s — ${stats.generated} generated, ${stats.cached} cached, ${stats.missing} source files missing.`
  )
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
