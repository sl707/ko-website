import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './main-panel.module.css'

const MainPanel = () => (
  <div className={styles.hero}>
    <div className={styles.imageContainer}>
      <StaticImage
        src="../images/정기총회.jpeg"
        loading="eager"
        alt="고씨중앙종문회 정기총회"
        className={styles.heroImage}
        imgClassName={styles.heroImage}
        style={{ width: '100%', height: '100%' }}
        imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
    <div className={styles.heroOverlay} />
    <div className={`${styles.heroContent} animate-fade-up`}>
      <span className={styles.badge}>탐라국의 왕손</span>
      <h1 className={styles.heroTitle}>고씨중앙종문회</h1>
      <p className={styles.heroSubtitle}>
        3,739년의 역사와 전통을 이어가는<br />
        전 세계 60만 고씨 가족의 중심
      </p>
      <div className={`${styles.ctaRow} animate-fade-up-delay-2`}>
        <Link className={styles.ctaPrimary} to="/introduction/">
          종문회 소개
        </Link>
        <Link className={styles.ctaSecondary} to="/newspaper/">
          고씨종보
        </Link>
      </div>
    </div>
    <div className={styles.scrollHint}>
      <span>Scroll</span>
      <div className={styles.scrollLine} />
    </div>
  </div>
)

export default MainPanel
