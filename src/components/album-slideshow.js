import React, { useState } from 'react'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import SectionHeader from './section-header'
import * as styles from './album-slideshow.module.css'

const firstFiveSlides = slideList.slice(0, 5)

const getSlideImage = slideData =>
  slideData.type === 'post' ? slideData.image : slideData.newsImage

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

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const currentSlide = firstFiveSlides[slideNumber - 1]

  const goPrev = () => setSlideNumber(n => (n === 1 ? 5 : n - 1))
  const goNext = () => setSlideNumber(n => (n === 5 ? 1 : n + 1))

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          label="소식"
          title="소식"
          subtitle="종문회의 최신 소식과 고씨종보를 확인하세요"
        />
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.media}>
              <Link className={styles.imageLink} to={getSlideUrl(currentSlide)}>
                <img
                  className={styles.image}
                  src={getSlideImage(currentSlide)}
                  alt={getSlideTitle(currentSlide)}
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
                  onClick={() => setSlideNumber(i + 1)}
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
