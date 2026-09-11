import React from 'react'
import * as styles from './section-header.module.css'

const SectionHeader = ({ label, title, subtitle, variant = 'default', align = 'center' }) => {
  const headerClass = [
    align === 'left' ? styles.headerLeft : styles.header,
    variant === 'light' ? styles.headerLight : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={headerClass}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <hr className={styles.divider} />
    </div>
  )
}

export default SectionHeader
