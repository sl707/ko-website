import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import Reveal from './reveal'
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

const slideSources = number => ({
  src: slideImageUrl(number, 960),
  srcSet: [
    `${slideImageUrl(number, 480)} 480w`,
    `${slideImageUrl(number, 960)} 960w`,
    `${slideImageUrl(number, 1440)} 1440w`,
  ].join(', '),
})

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const [outgoing, setOutgoing] = useState(null)
  const [imageLoading, setImageLoading] = useState(true)
  const sectionRef = useRef(null)
  const preloadedSlides = useRef(new Set())
  const currentSlide = firstFiveSlides[slideNumber - 1]
  const outgoingSlide = outgoing ? firstFiveSlides[outgoing - 1] : null

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
    if (number === slideNumber) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) setOutgoing(slideNumber)
    setSlideNumber(number)
    setImageLoading(!preloadedSlides.current.has(number))
  }

  useEffect(() => {
    if (!outgoing) return undefined
    const timer = window.setTimeout(() => setOutgoing(null), 700)
    return () => window.clearTimeout(timer)
  }, [outgoing])

  const goPrev = () => selectSlide(slideNumber === 1 ? 5 : slideNumber - 1)
  const goNext = () => selectSlide(slideNumber === 5 ? 1 : slideNumber + 1)

  const finishLoading = number => {
    preloadedSlides.current.add(number)
    setImageLoading(false)

    const adjacentSlides = [
      number === 1 ? 5 : number - 1,
      number === 5 ? 1 : number + 1,
    ]
    adjacentSlides.forEach(preloadSlide)
  }

  const setImageNode = node => {
    // A cached image can finish before React attaches onLoad, which left the
    // first slide under the loading shimmer until another slide was chosen.
    if (node?.complete) finishLoading(slideNumber)
  }

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <SectionHeader
          label="소식"
          title="소식"
          subtitle="종문회의 최신 소식과 고씨종보를 확인하세요"
        />
        <Reveal className={styles.revealCard}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.media}>
              <div
                className={`${styles.imagePlaceholder} ${
                  imageLoading && !outgoing ? styles.imagePlaceholderVisible : ''
                }`}
                aria-hidden="true"
              />
              {outgoingSlide && (
                <img
                  className={styles.outgoing}
                  {...slideSources(outgoing)}
                  alt=""
                  onAnimationEnd={() => setOutgoing(null)}
                />
              )}
              <Link className={styles.imageLink} to={getSlideUrl(currentSlide)}>
                <img
                  key={slideNumber}
                  className={`${styles.image} ${outgoing ? styles.incoming : ''}`}
                  {...slideSources(slideNumber)}
                  sizes="(max-width: 900px) calc(100vw - 32px), min(50vw, 640px)"
                  alt={getSlideTitle(currentSlide)}
                  loading={slideNumber === 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  ref={setImageNode}
                  onLoad={() => finishLoading(slideNumber)}
                  onError={() => setImageLoading(false)}
                />
              </Link>
              {getSlideCaption(currentSlide) && (
                <p className={styles.caption}>{getSlideCaption(currentSlide)}</p>
              )}
            </div>
            <div className={`${styles.content} ${styles.contentEnter}`} key={slideNumber}>
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
        </Reveal>
      </div>
    </section>
  )
}

export default AlbumSubpanel
