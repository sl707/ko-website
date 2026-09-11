import React from 'react'
import { Link } from 'gatsby'
import * as styles from './post-block.module.css'

const formatDate = date =>
  date ? date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

const PostBlock = ({ post, news, front }) => {
  const href = news ? `/newspaper/${post.newsNumber}/` : `/post/${post.postId}/`
  const title = news
    ? `고씨종보 ${post.newsNumber}호`
    : post.postTitleList && !front
      ? post.postTitleList
      : [post.title]

  const titles = Array.isArray(title) ? title : [title]

  return (
    <article className={styles.card}>
      <Link className={styles.link} to={href}>
        <div className={`${styles.imageWrap} ${front ? styles.imageFront : ''}`}>
          <img
            className={styles.image}
            src={news ? post.newsImage : post.image}
            alt={titles[0]}
          />
        </div>
        <div className={styles.body}>
          {news && (
            <span className={styles.meta}>종보 · {post.newsNumber}호</span>
          )}
          <h3 className={styles.title}>
            {titles.map((line, i) => (
              <span key={i} className={styles.titleLine}>{line}</span>
            ))}
          </h3>
          {(news ? post.newsDate : post.date) && (
            <time className={styles.date} dateTime={(news ? post.newsDate : post.date).toISOString()}>
              {formatDate(news ? post.newsDate : post.date)}
            </time>
          )}
        </div>
      </Link>
    </article>
  )
}

export default PostBlock
