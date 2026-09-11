import React from 'react'
import { Link } from 'gatsby'
import * as styles from './link-block.module.css'

const LinkBlock = props => (
  <Link className={styles.card} to={props.blkLink}>
    <img className={styles.image} src={props.blkImage} alt={props.blkTitle} />
    <div className={styles.overlay} />
    <div className={styles.content}>
      <p className={styles.text}>
        {props.blkTitle}
        {props.blkTitle2 && (
          <>
            <br />
            {props.blkTitle2}
          </>
        )}
      </p>
      <span className={styles.arrow}>→</span>
    </div>
  </Link>
)

export default LinkBlock
