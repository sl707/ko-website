import React, { useState } from 'react'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import SectionHeader from './section-header'
import * as styles from './album-slideshow.module.css'

const firstFiveSlides = slideList.slice(0, 5)

const increaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 5 ? slideNumFunc(1) : slideNumFunc(slideNum + 1)
}

const decreaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 1 ? slideNumFunc(5) : slideNumFunc(slideNum - 1)
}

const getSlideImage = slideData =>
  slideData.type === 'post' ? slideData.image : slideData.newsImage

const getSlideTitle = slideData =>
  slideData.type === 'post'
    ? slideData.title
    : `고씨종보 ${slideData.newsNumber}호`

const getSlideDate = slideData =>
  slideData.type === 'post'
    ? `${slideData.date.toLocaleString('en-CA').slice(0, 10)}`
    : `${slideData.newsDate.toLocaleString('en-CA').slice(0, 10)}`

const getSlideText = slideData =>
  slideData.type === 'post' && slideData.text !== ''
    ? `${slideData.text.slice(0, 180)}...`
    : ''

const getSlideUrl = slideData =>
  slideData.type === 'post'
    ? `/post/${slideData.postId}`
    : `/newspaper/${slideData.newsNumber}`

const getSlideCaption = slideData => slideData.imageCaption

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const currentSlide = firstFiveSlides[slideNumber - 1]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          label="News"
          title="소식"
          subtitle="종문회의 최신 소식과 고씨종보를 확인하세요"
        />
        <div className={styles.content}>
          <div className={styles.imageCard}>
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
          <div className={styles.description}>
            <span className={styles.dateBadge}>{getSlideDate(currentSlide)}</span>
            <h3 className={styles.slideTitle}>{getSlideTitle(currentSlide)}</h3>
            {getSlideText(currentSlide) && (
              <p className={styles.slideText}>{getSlideText(currentSlide)}</p>
            )}
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => decreaseSlide(slideNumber, setSlideNumber)}
                aria-label="이전"
              >
                ‹
              </button>
              <Link className={styles.continueLink} to={getSlideUrl(currentSlide)}>
                더보기 →
              </Link>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => increaseSlide(slideNumber, setSlideNumber)}
                aria-label="다음"
              >
                ›
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlbumSubpanel
