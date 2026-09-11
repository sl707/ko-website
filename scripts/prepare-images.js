const fs = require('fs')
const os = require('os')
const path = require('path')
const sharp = require('sharp')

require = require('esm')(module)
const slideList = require('../src/data/slides').default
const newspaperList = require('../src/data/newspapers').default

const ROOT = path.resolve(__dirname, '..')
const STATIC_DIR = path.join(ROOT, 'static')
const SLIDE_DIR = path.join(STATIC_DIR, 'generated', 'slides')
const NEWS_DIR = path.join(STATIC_DIR, 'generated', 'news')

const SLIDE_COUNT = 5
const SLIDE_WIDTHS = [480, 960, 1440]
// Single reading-width derivative per newspaper page: small enough to prefetch a
// whole issue, while zooming falls back to the full-resolution original.
const NEWS_WIDTH = 1200
const DEFAULT_PAGE_COUNT = 8

const stats = { generated: 0, cached: 0, missing: 0 }

const isUpToDate = (sourcePath, outputPath) => {
  if (!fs.existsSync(outputPath)) return false
  return fs.statSync(outputPath).mtimeMs >= fs.statSync(sourcePath).mtimeMs
}

async function renderVariant(sourcePath, outputPath, width, quality) {
  if (isUpToDate(sourcePath, outputPath)) {
    stats.cached += 1
    return
  }

  await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath)

  stats.generated += 1
}

function buildTaskList() {
  const tasks = []

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

  return tasks
}

async function runTasks(tasks) {
  const concurrency = Math.max(2, Math.min(os.cpus().length, 8))
  let cursor = 0

  const workers = Array.from({ length: concurrency }, async () => {
    while (cursor < tasks.length) {
      const task = tasks[cursor]
      cursor += 1
      await renderVariant(task.sourcePath, task.outputPath, task.width, task.quality)
    }
  })

  await Promise.all(workers)
}

async function main() {
  fs.mkdirSync(SLIDE_DIR, { recursive: true })
  fs.mkdirSync(NEWS_DIR, { recursive: true })

  const tasks = buildTaskList()
  const startedAt = Date.now()
  await runTasks(tasks)

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1)
  console.log(
    `Images ready in ${elapsed}s — ${stats.generated} generated, ${stats.cached} cached, ${stats.missing} source files missing.`
  )
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
