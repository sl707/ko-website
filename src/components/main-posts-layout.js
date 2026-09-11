import React from 'react'

import Layout from '../components/layout'
import PostBlock from './post-block'
import * as styles from './main-posts-layout.module.css'

const MainPostsLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <div className={styles.grid}>
      {props.postList.length === 0 ? (
        <p className={styles.empty}>업데이트 중...</p>
      ) : (
        props.postList.map(singlepost => (
          <PostBlock
            key={singlepost.postId || singlepost.newsNumber}
            post={singlepost}
            news={props.news}
          />
        ))
      )}
    </div>
  </Layout>
)

export default MainPostsLayout
