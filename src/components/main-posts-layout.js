import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'
import PostBlock from './post-block'
import ViewToggle from './view-toggle'
import * as styles from './main-posts-layout.module.css'

const MainPostsLayout = props => {
  const [view, setView] = useState('grid')

  useEffect(() => {
    const savedView = window.localStorage.getItem('content-view')
    if (savedView === 'grid' || savedView === 'list') setView(savedView)
  }, [])

  const selectView = nextView => {
    setView(nextView)
    window.localStorage.setItem('content-view', nextView)
  }

  return (
    <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
      <div className={styles.toolbar}>
        <p className={styles.count}>총 {props.postList.length}건</p>
        <ViewToggle view={view} onChange={selectView} />
      </div>
      <div className={view === 'list' ? styles.list : styles.grid}>
        {props.postList.length === 0 ? (
          <p className={styles.empty}>업데이트 중...</p>
        ) : (
          props.postList.map(singlepost => (
            <PostBlock
              key={singlepost.postId || singlepost.newsNumber}
              post={singlepost}
              news={props.news}
              view={view}
            />
          ))
        )}
      </div>
    </Layout>
  )
}

export default MainPostsLayout
