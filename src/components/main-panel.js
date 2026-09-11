import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './main-panel.module.css'

const MainPanel = () => (
  <div className={styles.hero}>
    <StaticImage
      src="../images/정기총회.jpeg"
      loading="eager"
      alt="고씨중앙종문회 정기총회"
      className={styles.heroImage}
      imgClassName={styles.heroImage}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    <div className={styles.heroOverlay} />
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>고씨중앙종문회</h1>
      <p className={styles.heroSubtitle}>탐라국의 왕손</p>
      <div className={styles.accentLine} />
    </div>
  </div>
)

export default MainPanel
