import React from 'react'
import { Link } from 'gatsby'
import * as styles from './post-block.module.css'

const PostBlock = props => (
  <div className={styles.wrapper}>
    <Link
      className={`${styles.card} ${props.front ? styles.cardFront : ''}`}
      to={
        props.news
          ? `/newspaper/${props.post.newsNumber}/`
          : `/post/${props.post.postId}/`
      }
    >
      <img
        className={`${styles.image} ${props.front ? styles.imageFront : ''}`}
        src={props.news ? props.post.newsImage : props.post.image}
        alt=""
      />
      <div className={styles.text}>
        {props.news
          ? `${props.post.newsNumber}호`
          : props.post.postTitleList && !props.front
            ? props.post.postTitleList.map((pt, i) => (
                <div key={i}>{pt}</div>
              ))
            : props.post.title}
      </div>
    </Link>
  </div>
)

export default PostBlock
