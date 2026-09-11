import React from 'react'
import * as styles from './info-block.module.css'

const imageSrc = path => (path.startsWith('/') ? path : `/${path}`)

const InfoBlock = ({ image, text, title, order }) => (
  <article className={styles.card}>
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={imageSrc(image)} alt={title} />
      <span className={styles.orderBadge}>{String(order).padStart(2, '0')}</span>
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  </article>
)

export default InfoBlock
