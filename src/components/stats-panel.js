import React from 'react'
import * as styles from './stats-panel.module.css'

const stats = [
  { value: '3,739년', label: '탐라국 통치 역사' },
  { value: '60만+', label: '전 세계 고씨 가족' },
  { value: '제50회', label: '2023년 정기총회' },
]

const StatsPanel = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {stats.map(stat => (
        <div key={stat.label} className={styles.stat}>
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
)

export default StatsPanel
