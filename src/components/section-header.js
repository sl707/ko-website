import React, { useEffect, useRef, useState } from 'react'
import * as styles from './section-header.module.css'

const SectionHeader = ({ label, title, subtitle, variant = 'default', align = 'center' }) => {
  const ref = useRef(null)
  const [drawn, setDrawn] = useState(false)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setArmed(true)
          return
        }
        setArmed(true)
        window.requestAnimationFrame(() => setDrawn(true))
        observer.disconnect()
      },
      { threshold: 0.35 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const headerClass = [
    align === 'left' ? styles.headerLeft : styles.header,
    variant === 'light' ? styles.headerLight : '',
    armed ? styles.armed : '',
    drawn ? styles.drawn : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={headerClass} ref={ref}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <hr className={styles.divider} />
    </div>
  )
}

export default SectionHeader
