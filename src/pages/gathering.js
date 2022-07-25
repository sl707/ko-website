import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import MainPostsLayout from '../components/main-posts-layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import posts from '../data/posts'

const GatheringPage = () => (
  <MainPostsLayout title={'소식 / 자료실'} subtitle={'총회 / 이사회'} postList={posts.filter(post => post.type === '총회/이사회')}/>
)

export default GatheringPage
