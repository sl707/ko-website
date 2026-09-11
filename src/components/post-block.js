import React from 'react'
import { Link } from 'gatsby'
import * as styles from './post-block.module.css'

const formatDate = date =>
  date ? date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

const PostBlock = ({ post, news, front, view = 'grid' }) => {
  const href = news ? `/newspaper/${post.newsNumber}/` : `/post/${post.postId}/`
  const title = news
    ? `고씨종보 ${post.newsNumber}호`
    : post.postTitleList && !front
      ? post.postTitleList
      : [post.title]

  const titles = Array.isArray(title) ? title : [title]
  const isList = view === 'list'

  return (
    <article className={`${styles.card} ${isList ? styles.cardList : ''}`}>
      <Link className={`${styles.link} ${isList ? styles.linkList : ''}`} to={href}>
        <div
          className={`${styles.imageWrap} ${front ? styles.imageFront : ''} ${
            isList ? styles.imageWrapList : ''
          }`}
        >
          <img
            className={styles.image}
            src={news ? post.newsImage : post.image}
            alt={titles[0]}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={`${styles.body} ${isList ? styles.bodyList : ''}`}>
          <span className={styles.meta}>
            {news ? `종보 · ${post.newsNumber}호` : post.type}
          </span>
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
