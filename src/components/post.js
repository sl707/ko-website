import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import s from 'styled-components'
import { Text, TextWrapperOne } from "../data/typography"

const PostWrapper = s.div`
  display: grid;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const PostImage = s.img`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-height: 600px;
  object-fit: contain;
  text-align: center;
`

const Post = props => (
  <PostWrapper>
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
