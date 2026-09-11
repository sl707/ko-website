import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './page-title.module.css'

const PageTitle = props => (
  <div className={styles.wrapper}>
    <StaticImage
      src="../images/성주전.jpeg"
      loading="eager"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    <div className={styles.overlay} />
    <h1 className={styles.title}>{props.pageTitle}</h1>
  </div>
)

export default PageTitle
