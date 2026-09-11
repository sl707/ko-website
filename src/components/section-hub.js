import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'
import * as styles from './section-hub.module.css'

const SectionHub = ({ title, subtitle, intro, items }) => (
  <Layout pageTitle={title} pageSubtitle={subtitle}>
    {intro && <p className={styles.intro}>{intro}</p>}
    <div className={styles.grid}>
      {items.map((item, index) => (
        <Link className={styles.card} key={item.url} to={item.url}>
          <div className={styles.media}>
            <img
              className={styles.image}
              src={item.image}
              alt=""
              loading={index < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className={styles.number}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className={styles.body}>
            <h2 className={styles.cardTitle}>{item.name}</h2>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
            <span className={styles.more}>
              자세히 보기 <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export default SectionHub
