import React from 'react'
import { Link } from 'gatsby'

import * as styles from './adjacent-nav.module.css'

const AdjacentNav = ({
  previous,
  next,
  listHref,
  listLabel,
  previousLabel,
  nextLabel,
  label,
}) => (
  <nav className={styles.nav} aria-label={label}>
    {previous ? (
      <Link className={styles.link} to={previous.href} rel="prev">
        <span className={styles.direction}>{previousLabel}</span>
        <span className={styles.title}>{previous.title}</span>
      </Link>
    ) : (
      <span className={styles.empty} />
    )}

    <Link className={styles.list} to={listHref}>
      {listLabel}
    </Link>

    {next ? (
      <Link className={`${styles.link} ${styles.next}`} to={next.href} rel="next">
        <span className={styles.direction}>{nextLabel}</span>
        <span className={styles.title}>{next.title}</span>
      </Link>
    ) : (
      <span className={styles.empty} />
    )}
  </nav>
)

export default AdjacentNav
