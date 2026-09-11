import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'

import Layout from '../components/layout'
import PostBlock from '../components/post-block'
import ViewToggle from '../components/view-toggle'
import { postList } from '../data/posts'
import * as styles from './posts.module.css'

const ALL = '전체'
const categories = [ALL, '총회/이사회', '제향', '연수원', '기타']

const PostsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL)
  const [view, setView] = useState('grid')
  const location = useLocation()

  useEffect(() => {
    const category = new URLSearchParams(location.search).get('category')
    setSelectedCategory(categories.includes(category) ? category : ALL)
  }, [location.search])

  useEffect(() => {
    const savedView = window.localStorage.getItem('content-view')
    if (savedView === 'grid' || savedView === 'list') setView(savedView)
  }, [])

  const selectCategory = category => {
    setSelectedCategory(category)
    const query = category === ALL ? '' : `?category=${encodeURIComponent(category)}`
    navigate(`/posts/${query}`, { replace: true })
  }

  const selectView = nextView => {
    setView(nextView)
    window.localStorage.setItem('content-view', nextView)
  }

  const visiblePosts =
    selectedCategory === ALL
      ? postList
      : postList.filter(post => post.type === selectedCategory)

  return (
    <Layout pageTitle="소식 / 자료실">
      <section className={styles.filters} aria-label="소식 분류">
        <div className={styles.filterList}>
          {categories.map(category => {
            const count =
              category === ALL
                ? postList.length
                : postList.filter(post => post.type === category).length
            const isSelected = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${
                  isSelected ? styles.filterButtonActive : ''
                }`}
                onClick={() => selectCategory(category)}
                aria-pressed={isSelected}
              >
                {category}
                <span className={styles.count}>{count}</span>
              </button>
            )
          })}
        </div>
        <div className={styles.resultsToolbar}>
          <p className={styles.resultCount}>
            {selectedCategory === ALL ? '전체 소식' : selectedCategory} {visiblePosts.length}건
          </p>
          <ViewToggle view={view} onChange={selectView} />
        </div>
      </section>

      <div className={view === 'list' ? styles.list : styles.grid}>
        {visiblePosts.map(post => (
          <PostBlock key={post.postId} post={post} view={view} />
        ))}
      </div>
    </Layout>
  )
}

export default PostsPage
