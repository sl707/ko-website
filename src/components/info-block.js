import React from 'react'
import * as styles from './info-block.module.css'

const InfoBlock = ({ image, text, order, subtitle }) => (
  <div className={styles.block}>
    {order % 2 === 0 && (
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>
    )}
    <div className={styles.text}>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      {text}
    </div>
    {order % 2 === 1 && (
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>
    )}
  </div>
)

export default InfoBlock
