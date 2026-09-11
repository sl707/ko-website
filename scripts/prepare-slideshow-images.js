const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

require = require('esm')(module)
const slideList = require('../src/data/slides').default

const ROOT = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT, 'static', 'generated', 'slides')
const WIDTHS = [480, 960, 1440]
const SLIDE_COUNT = 5

const getImagePath = slide =>
  slide.type === 'post' ? slide.image : slide.newsImage

async function prepareSlide(slide, index) {
  const sourceUrl = getImagePath(slide)
  const sourcePath = path.join(ROOT, 'static', sourceUrl.replace(/^\//, ''))

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Slideshow image not found: ${sourcePath}`)
  }

  await Promise.all(
    WIDTHS.map(width =>
      sharp(sourcePath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 76, effort: 4 })
        .toFile(path.join(OUTPUT_DIR, `slide-${index + 1}-${width}.webp`))
    )
  )
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  await Promise.all(
    slideList.slice(0, SLIDE_COUNT).map((slide, index) =>
      prepareSlide(slide, index)
    )
  )
  console.log(`Prepared ${SLIDE_COUNT} responsive slideshow images.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
