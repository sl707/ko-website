import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import PostBlock from './post-block'

const MPWrapper = s.div`
  display: none;
  width: 100%;
  align-items: start;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    display: flex;
  } 
`

const MPWrapper2 = s.div`
  display: none;
  width: 100%;
  align-items: start;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`

const MPColumnWrapper = s.div`
  position: relative;
  margin: 20px;
`

const MainPostsLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <MPWrapper>
      {(props.postList.length === 0) && <div>업데이트 중...</div>}
      {
        (props.postList.length >= 1) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 4 === 0 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
      {
        (props.postList.length >= 2) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 4 === 1 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
      {
        (props.postList.length >= 3) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 4 === 2 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
      {
        (props.postList.length >= 4) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 4 === 3 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
    </MPWrapper>
    <MPWrapper2>
      {(props.postList.length === 0) && <div>업데이트 중...</div>}
      {
        (props.postList.length >= 1) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 2 === 0 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
      {
        (props.postList.length >= 2) &&
        <MPColumnWrapper>
          {
            props.postList.filter((element, index) => { return index % 2 === 1 }).map(singlepost => (
              <PostBlock post={singlepost} news={props.news}/>
            ))
          }
        </MPColumnWrapper>
      }
    </MPWrapper2>
  </Layout>
)

export default MainPostsLayout
