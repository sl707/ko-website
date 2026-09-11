import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './page-title.module.css'

const PageTitle = ({ pageTitle }) => (
  <div className={styles.wrapper}>
    <StaticImage
      src="../images/성주전.jpeg"
      loading="eager"
      alt=""
      className={styles.bgImage}
      imgClassName={styles.bgImage}
      imgStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    <div className={styles.overlay} />
    <h1 className={styles.title}>{pageTitle}</h1>
  </div>
)

export default PageTitle
