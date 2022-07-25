import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import s from 'styled-components'
import { Text, TextSubheading, TextWrapperOne } from "../data/typography"

const PostWrapper = s.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
`

const PostImage = s.img`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  object-fit: contain;
  text-align: center;
  padding: 20px;
  padding-top: 0;
  margin: 0;
`

const Post = props => (
  <PostWrapper>
      <TextSubheading style={{ textAlign: 'center' }}>
        {props.date && props.date.toLocaleString('en-CA').slice(0, 10)}
      </TextSubheading>
    <PostImage
      src={props.imageUrl}
      alt="MISSING JPG"
    />
    <TextWrapperOne>
      {props.text}
    </TextWrapperOne>
  </PostWrapper>
)

export default Post
