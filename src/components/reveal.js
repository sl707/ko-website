import React, { useEffect, useRef, useState } from 'react'

import * as styles from './reveal.module.css'

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true)
          setShown(true)
          observer.disconnect()
          return
        }
        setEnabled(true)
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const classes = [
    styles.wrap,
    enabled ? styles.item : '',
    enabled && shown ? styles.shown : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export default Reveal
