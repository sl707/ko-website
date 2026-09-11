import React from 'react'
import { Link } from 'gatsby'

import alertList from '../data/alerts'
import * as styles from './alert-table.module.css'

const alertTableHeader = (
  <div className={styles.head}>
    <div className={styles.cellTitle} style={{ fontWeight: 'bolder' }}>
      제목
    </div>
    <small className={styles.cellDate} style={{ fontSize: '15px' }}>
      날자
    </small>
  </div>
)

const AlertSubpanel = props => {
  const alertArray = props.page ? alertList : alertList.slice(0, 7)
  for (let i = alertArray.length; i < 7; i++) {
    alertArray[i] = {
      empty: true,
    }
  }
  return (
    <div
      className={styles.wrapper}
      style={props.page && { width: '80%', maxWidth: 'none', padding: '0' }}
    >
      {!props.page && <div className={styles.subtitle}>공지사항</div>}
      <table className={styles.table} style={props.page && { width: '100%' }}>
        {props.page && alertTableHeader}
        {alertArray.map((alert, index) => (
          <tr key={index} className={styles.row}>
            {alert.empty ? (
              <td>
                <div className={styles.emptyCell}>
                  <div className={styles.blankLine} />
                </div>
              </td>
            ) : (
              <td>
                <Link className={styles.cellLink} to={`/alert/${alert.alertId}`}>
                  <div className={styles.cellTitle}>{alert.title}</div>
                  <small className={styles.cellDate}>
                    {alert.date &&
                      alert.date
                        .toLocaleDateString('en-CA')
                        .slice(props.page ? 0 : 5)}
                  </small>
                </Link>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AlertSubpanel
