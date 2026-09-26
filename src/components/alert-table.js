import React from 'react'
import { Link } from 'gatsby'

import alertList from '../data/alerts'
import * as styles from './alert-table.module.css'

const formatDate = (date, short) => {
  if (!date) return ''
  const formatted = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return short ? formatted.replace(/^\d{4}\.\s*/, '') : formatted
}

const AlertSubpanel = ({ page, compact }) => {
  const items = page ? [...alertList] : alertList.slice(0, 7)

  if (items.length === 0) {
    return (
      <div className={styles.wrapper}>
        {!page && <div className={styles.subtitle}>공지사항</div>}
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>등록된 공지사항이 없습니다</p>
          <p className={styles.emptyText}>새로운 공지가 올라오면 이곳에 표시됩니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {!page && <div className={styles.subtitle}>공지사항</div>}
      <ul className={styles.list}>
        {items.map(alert => (
          <li key={alert.alertId} className={styles.item}>
            <Link className={styles.link} to={`/alert/${alert.alertId}`}>
              <span className={styles.title}>{alert.title}</span>
              <time className={styles.date}>{formatDate(alert.date, compact)}</time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlertSubpanel
