import React, { useEffect, useRef, useState } from 'react'
import * as styles from './stats-panel.module.css'

const stats = [
  { key: 'years', label: '탐라국 통치 역사' },
  { key: 'families', label: '전 세계 고씨 가족' },
  { key: 'meeting', label: '2023년 정기총회' },
]

const formatStat = (key, value) => {
  if (key === 'years') return `${value.toLocaleString('ko-KR')}년`
  if (key === 'families') return `${value}만+`
  return '제50회'
}

const targets = { years: 3739, families: 60, meeting: 50 }

const StatsPanel = () => {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [armed, setArmed] = useState(false)
  const [reduced, setReduced] = useState(true)
  const [years, setYears] = useState(targets.years)
  const [families, setFamilies] = useState(targets.families)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(reduce)
    if (reduce || !ref.current || typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true)
          setActive(true)
          observer.disconnect()
          return
        }
        setArmed(true)
      },
      { threshold: 0.45 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active || reduced) return undefined
    setYears(0)
    setFamilies(0)
    const started = performance.now()
    const duration = 1400
    let frame = 0
    const ease = t => 1 - (1 - t) ** 3
    const step = now => {
      const progress = Math.min(1, (now - started) / duration)
      const eased = ease(progress)
      setYears(Math.round(targets.years * eased))
      setFamilies(Math.round(targets.families * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, reduced])

  const displayed = {
    years,
    families,
    meeting: targets.meeting,
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {stats.map((stat, index) => (
          <div
            key={stat.key}
            className={`${styles.stat} ${armed && !reduced ? styles.armed : ''} ${
              active ? styles.statShown : ''
            } ${reduced ? styles.statImmediate : ''}`}
            style={reduced ? undefined : { transitionDelay: `${index * 90}ms` }}
          >
            <p className={`${styles.value} ${stat.key === 'meeting' ? styles.meeting : ''}`}>
              {formatStat(stat.key, displayed[stat.key])}
            </p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsPanel
