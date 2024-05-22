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
  display: flex;
  flex-direction: column;
`

const PostImage = s.img`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  max-width: 700px;
  object-fit: contain;
  text-align: center;
  padding: 0 20px;
  margin: 0;
`

const Post = props => (
  <PostWrapper>
    <PostImage
      src={props.imageUrl}
      alt="MISSING JPG"
    />
    {props.imageCaption && <TextWrapperOne style={{ padding: '0px', width: '100%' }}>
      <Text style={{ padding: '0px', margin: '0px', fontSize: '14px', fontStyle: 'italic', }}>
        {props.imageCaption}
      </Text>
    </TextWrapperOne>}
    {
      props.imageTwoUrl &&
      <>
      <br />
      <PostImage
        src={props.imageTwoUrl}
        alt="MISSING JPG"
      />
      </>
    }
    <TextSubheading style={{ textAlign: 'center', margin: '0', paddingBottom: '10px' }}>
        {props.date && props.date.toLocaleString('en-CA').slice(0, 10)}
      </TextSubheading>
    <TextWrapperOne>
      <Text>
        {props.text}
      </Text>
    </TextWrapperOne>
  </PostWrapper>
)

export default Post
