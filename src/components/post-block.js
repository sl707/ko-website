import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import theme from '../theme'

const PostWrapper = s.div`
  margin-bottom: 24px;
`

const PostSlide = s(Link)`
  display: block;
  text-decoration: none;
  border-radius: ${theme.radius.md};
  overflow: hidden;
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadows.sm};
  transition: transform ${theme.transitions.normal},
    box-shadow ${theme.transitions.normal};
  width: ${props => (props.$front ? 'auto' : '225px')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`

const PostSlideImage = s.img`
  display: block;
  width: 100%;
  height: ${props => (props.$front ? '300px' : '150px')};
  object-fit: cover;
`

const PostSlideText = s.div`
  padding: 12px 14px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.text};
  word-break: keep-all;
  line-break: strict;
  border-top: 1px solid ${theme.colors.borderLight};
`

const PostBlock = props => (
  <PostWrapper>
    <PostSlide
      to={
        props.news
          ? `/newspaper/${props.post.newsNumber}/`
          : `/post/${props.post.postId}/`
      }
      $front={props.front}
    >
      <PostSlideImage
        src={props.news ? props.post.newsImage : props.post.image}
        alt=""
        $front={props.front}
      />
      <PostSlideText>
        {props.news
          ? `${props.post.newsNumber}호`
          : props.post.postTitleList && !props.front
            ? props.post.postTitleList.map((pt, i) => (
                <div key={i}>{pt}</div>
              ))
            : props.post.title}
      </PostSlideText>
    </PostSlide>
  </PostWrapper>
)

export default PostBlock
