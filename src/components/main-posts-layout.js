import React from 'react'

import Layout from '../components/layout'
import PostBlock from './post-block'
import * as styles from './main-posts-layout.module.css'

const MainPostsLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <div className={styles.wrapperLarge}>
      {props.postList.length === 0 && <div>업데이트 중...</div>}
      {props.postList.length >= 1 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 4 === 0)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
      {props.postList.length >= 2 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 4 === 1)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
      {props.postList.length >= 3 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 4 === 2)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
      {props.postList.length >= 4 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 4 === 3)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
    </div>
    <div className={styles.wrapperSmall}>
      {props.postList.length === 0 && <div>업데이트 중...</div>}
      <div className={styles.column}>
        {props.postList.map(singlepost => (
          <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
        ))}
      </div>
    </div>
    <div className={styles.wrapperMedium}>
      {props.postList.length === 0 && <div>업데이트 중...</div>}
      {props.postList.length >= 1 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 2 === 0)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
      {props.postList.length >= 2 && (
        <div className={styles.column}>
          {props.postList
            .filter((_, index) => index % 2 === 1)
            .map(singlepost => (
              <PostBlock key={singlepost.postId || singlepost.newsNumber} post={singlepost} news={props.news} />
            ))}
        </div>
      )}
    </div>
  </Layout>
)

export default MainPostsLayout
