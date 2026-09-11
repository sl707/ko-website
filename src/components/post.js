import React from 'react'
import { Text, TextSubheading, TextWrapperOne } from '../data/typography'
import * as styles from './post.module.css'

const Post = props => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={props.imageUrl} alt="" />
    {props.imageCaption && (
      <TextWrapperOne style={{ padding: '0px', width: '100%' }}>
        <Text
          style={{
            padding: '0px',
            margin: '0px',
            fontSize: '16px',
            fontStyle: 'italic',
          }}
        >
          {props.imageCaption}
        </Text>
      </TextWrapperOne>
    )}
    {props.imageTwoUrl && (
      <>
        <br />
        <img className={styles.image} src={props.imageTwoUrl} alt="" />
      </>
    )}
    <TextSubheading
      style={{ textAlign: 'center', margin: '0', paddingBottom: '10px' }}
    >
      {props.date && props.date.toLocaleString('en-CA').slice(0, 10)}
    </TextSubheading>
    <TextWrapperOne>
      <Text>
        {props.text && typeof props.text === 'string'
          ? props.text.replace(/\n{3,}|\n{2}/g, match =>
              match.length >= 3 ? '\n\n' : '\n'
            )
          : props.text}
      </Text>
    </TextWrapperOne>
  </div>
)

export default Post
