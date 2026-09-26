import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import SectionHeader from './section-header'
import * as styles from './album-slideshow.module.css'

const firstFiveSlides = slideList.slice(0, 5)

const getSlideTitle = slideData =>
  slideData.type === 'post'
    ? slideData.title
    : `고씨종보 ${slideData.newsNumber}호`

const getSlideDate = slideData => {
  const date = slideData.type === 'post' ? slideData.date : slideData.newsDate
  return date
    ? date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''
}

const getSlideText = slideData =>
  slideData.type === 'post' && slideData.text !== ''
    ? slideData.text.slice(0, 160)
    : ''

const getSlideUrl = slideData =>
  slideData.type === 'post'
    ? `/post/${slideData.postId}`
    : `/newspaper/${slideData.newsNumber}`

const getSlideCaption = slideData => slideData.imageCaption

const slideImageUrl = (number, width) =>
  `/generated/slides/slide-${number}-${width}.webp`

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const [imageLoading, setImageLoading] = useState(true)
  const sectionRef = useRef(null)
  const preloadedSlides = useRef(new Set([1]))
  const currentSlide = firstFiveSlides[slideNumber - 1]

  const preloadSlide = number => {
    if (
      typeof window === 'undefined' ||
      preloadedSlides.current.has(number)
    ) {
      return
    }

    preloadedSlides.current.add(number)
    const image = new Image()
    image.src = slideImageUrl(number, 960)
    image.srcset = [
      `${slideImageUrl(number, 480)} 480w`,
      `${slideImageUrl(number, 960)} 960w`,
      `${slideImageUrl(number, 1440)} 1440w`,
    ].join(', ')
    image.sizes =
      '(max-width: 900px) calc(100vw - 32px), min(50vw, 640px)'
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return
        firstFiveSlides.forEach((_, index) => preloadSlide(index + 1))
        observer.disconnect()
      },
      { rootMargin: '800px 0px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const selectSlide = number => {
    setImageLoading(true)
    setSlideNumber(number)
  }

  const goPrev = () => selectSlide(slideNumber === 1 ? 5 : slideNumber - 1)
  const goNext = () => selectSlide(slideNumber === 5 ? 1 : slideNumber + 1)

  const handleImageLoad = () => {
    setImageLoading(false)

    const adjacentSlides = [
      slideNumber === 1 ? 5 : slideNumber - 1,
      slideNumber === 5 ? 1 : slideNumber + 1,
    ]

    adjacentSlides.forEach(preloadSlide)
  }

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <SectionHeader
          label="소식"
          title="소식"
          subtitle="종문회의 최신 소식과 고씨종보를 확인하세요"
        />
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.media}>
              <div
                className={`${styles.imagePlaceholder} ${
                  imageLoading ? styles.imagePlaceholderVisible : ''
                }`}
                aria-hidden="true"
              />
              <Link className={styles.imageLink} to={getSlideUrl(currentSlide)}>
                <img
                  key={slideNumber}
                  className={styles.image}
                  src={slideImageUrl(slideNumber, 960)}
                  srcSet={[
                    `${slideImageUrl(slideNumber, 480)} 480w`,
                    `${slideImageUrl(slideNumber, 960)} 960w`,
                    `${slideImageUrl(slideNumber, 1440)} 1440w`,
                  ].join(', ')}
                  sizes="(max-width: 900px) calc(100vw - 32px), min(50vw, 640px)"
                  alt={getSlideTitle(currentSlide)}
                  loading={slideNumber === 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  onLoad={handleImageLoad}
                />
              </Link>
              {getSlideCaption(currentSlide) && (
                <p className={styles.caption}>{getSlideCaption(currentSlide)}</p>
              )}
            </div>
            <div className={styles.content}>
              <p className={styles.meta}>{getSlideDate(currentSlide)}</p>
              <h3 className={styles.title}>{getSlideTitle(currentSlide)}</h3>
              {getSlideText(currentSlide) && (
                <p className={styles.excerpt}>{getSlideText(currentSlide)}…</p>
              )}
              <Link className={styles.readMore} to={getSlideUrl(currentSlide)}>
                자세히 보기 →
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.navButton} onClick={goPrev} aria-label="이전">
              ‹
            </button>
            <div className={styles.dots}>
              {firstFiveSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${slideNumber === i + 1 ? styles.dotActive : ''}`}
                  onClick={() => selectSlide(i + 1)}
                  onPointerEnter={() => preloadSlide(i + 1)}
                  onFocus={() => preloadSlide(i + 1)}
                  aria-label={`슬라이드 ${i + 1}`}
                />
              ))}
            </div>
            <span className={styles.counter}>{slideNumber} / {firstFiveSlides.length}</span>
            <button type="button" className={styles.navButton} onClick={goNext} aria-label="다음">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlbumSubpanel
