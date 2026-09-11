import React from 'react'

import * as styles from './view-toggle.module.css'

const ViewToggle = ({ view, onChange }) => (
  <div className={styles.toggle} role="group" aria-label="보기 방식">
    <button
      type="button"
      className={`${styles.button} ${view === 'grid' ? styles.active : ''}`}
      onClick={() => onChange('grid')}
      aria-pressed={view === 'grid'}
      title="격자형으로 보기"
    >
      <span className={styles.gridIcon} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className={styles.label}>격자형</span>
    </button>
    <button
      type="button"
      className={`${styles.button} ${view === 'list' ? styles.active : ''}`}
      onClick={() => onChange('list')}
      aria-pressed={view === 'list'}
      title="목록형으로 보기"
    >
      <span className={styles.listIcon} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={styles.label}>목록형</span>
    </button>
  </div>
)

export default ViewToggle
