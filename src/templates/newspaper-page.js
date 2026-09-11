import React from 'react'

import Layout from '../components/layout'
import * as styles from './newspaper-page.module.css'

const NewspaperPage = ({ pageContext: { paper } }) => (
  <Layout pageTitle={'종보'} pageSubtitle={`${paper.newsNumber}호`}>
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={`/news/${paper.newsNumber}-1.${paper.newsImageType ?? 'jpg'}`}
        alt=""
      />
      {!paper.newsFirstOnly && (
        <>
          <img
            className={styles.image}
            src={`/news/${paper.newsNumber}-2.${paper.newsImageType ?? 'jpg'}`}
            alt=""
          />
          <img
            className={styles.image}
            src={`/news/${paper.newsNumber}-3.${paper.newsImageType ?? 'jpg'}`}
            alt=""
          />
          <img
            className={styles.image}
            src={`/news/${paper.newsNumber}-4.${paper.newsImageType ?? 'jpg'}`}
            alt=""
          />
          {(!paper.newsNumPages || paper.newsNumPages >= 8) && (
            <>
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-5.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-6.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-7.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-8.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
            </>
          )}
          {paper.newsNumPages >= 12 && (
            <>
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-9.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-10.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-11.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-12.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
            </>
          )}
          {paper.newsNumPages >= 16 && (
            <>
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-13.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-14.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-15.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
              <img
                className={styles.image}
                src={`/news/${paper.newsNumber}-16.${paper.newsImageType ?? 'jpg'}`}
                alt=""
              />
            </>
          )}
        </>
      )}
    </div>
  </Layout>
)

export default NewspaperPage
