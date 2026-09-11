import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'
import PostBlock from '../components/post-block'
import { postList } from '../data/posts'
import * as styles from './posts.module.css'

const ALL = '전체'
const categories = [ALL, '총회/이사회', '제향', '연수원', '기타']

const PostsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL)

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get('category')
    if (categories.includes(category)) {
      setSelectedCategory(category)
    }
  }, [])

  const selectCategory = category => {
    setSelectedCategory(category)
    const query = category === ALL ? '' : `?category=${encodeURIComponent(category)}`
    window.history.replaceState({}, '', `/posts/${query}`)
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
        <p className={styles.resultCount}>
          {selectedCategory === ALL ? '전체 소식' : selectedCategory} {visiblePosts.length}건
        </p>
      </section>

      <div className={styles.grid}>
        {visiblePosts.map(post => (
          <PostBlock key={post.postId} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default PostsPage
