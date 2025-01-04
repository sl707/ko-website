import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

const PostWrapper = s.div`
`

const PostSlide = s(Link)`
  border-collapse: collapse;
  text-decoration: none;
  padding: 10px;
  display: grid;
`

const PostSlideImage = s.img`
  margin: 0;
  display: flex;
  position: relative;
  width: 225px;
  height: 150px;
  object-fit: cover;
  border: 1px solid black;
`

const PostSlideText = s.div`
  margin: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  background: white;
  word-break: keep-all;
  line-break: strict;
`
const PostBlock = props => (
  <PostWrapper style={props.front ? {} : { width: '225px' }}>
    <PostSlide
      to={props.news ? `/newspaper/${props.post.newsNumber}/` : `/post/${props.post.postId}/`}
      style={props.front && { margin: '0px' }}>
      <PostSlideImage
        src={props.news ? props.post.newsImage : props.post.image}
        alt="MISSING JPG"
        style={props.front && { width: '420px', height: '300px' }}/>
      <PostSlideText>
        {props.news
          ? `${props.post.newsNumber}호`
          : ((props.post.postTitleList && !props.front)
            ? (props.post.postTitleList.map((pt, i) => (<div style={i == 0 ? {margin: '-2px'} : {margin: '-2px', marginTop: '-6px'}}>{pt}</div>)))
            : props.post.title)
        }
      </PostSlideText>
    </PostSlide>
  </PostWrapper>
)

export default PostBlock