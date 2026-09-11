import React from 'react'
import { Text, TextWrapperOne } from '../data/typography'
import * as styles from './post.module.css'

const toDate = value => (value instanceof Date ? value : new Date(value))

const formatDate = date => {
  if (!date) return ''
  const parsed = toDate(date)
  if (Number.isNaN(parsed.getTime())) return ''
  return parsed.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

const toIsoDate = date => {
  if (!date) return undefined
  const parsed = toDate(date)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

const Post = ({ imageUrl, imageTwoUrl, imageCaption, text, date }) => (
  <article className={styles.wrapper}>
    {imageUrl && (
      <div className={styles.imageFrame}>
        <img className={styles.image} src={imageUrl} alt="" />
      </div>
    )}
    {imageCaption && <p className={styles.caption}>{imageCaption}</p>}
    {imageTwoUrl && (
      <div className={styles.imageFrame}>
        <img className={styles.image} src={imageTwoUrl} alt="" />
      </div>
    )}
    {date && (
      <time className={styles.date} dateTime={toIsoDate(date)}>
        {formatDate(date)}
      </time>
    )}
    {(text || typeof text !== 'string') && (
      <div className={styles.body}>
        <TextWrapperOne>
          <Text>
            {text && typeof text === 'string'
              ? text.replace(/\n{3,}|\n{2}/g, match => (match.length >= 3 ? '\n\n' : '\n'))
              : text}
          </Text>
        </TextWrapperOne>
      </div>
    )}
  </article>
)

export default Post
