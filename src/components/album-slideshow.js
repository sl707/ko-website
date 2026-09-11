import React, { useState } from 'react'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import LeftArrow from '../images/slide-arrow-left.svg'
import RightArrow from '../images/slide-arrow-right.svg'
import ContinueArrow from '../images/continue-arrow.svg'
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
    ? `${slideData.text.slice(0, 150)}...`
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
        <h2 className={styles.sectionTitle}>소식</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Link to={getSlideUrl(currentSlide)}>
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
            <h3 className={styles.slideTitle}>{getSlideTitle(currentSlide)}</h3>
            <p className={styles.slideDate}>{getSlideDate(currentSlide)}</p>
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
                <img src={LeftArrow} alt="" style={{ transform: 'rotate(180deg)' }} />
              </button>
              <Link className={styles.continueLink} to={getSlideUrl(currentSlide)}>
                더보기
                <img src={ContinueArrow} alt="" />
              </Link>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => increaseSlide(slideNumber, setSlideNumber)}
                aria-label="다음"
              >
                <img src={RightArrow} alt="" />
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
