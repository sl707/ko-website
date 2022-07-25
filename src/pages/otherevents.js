import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import MainPostsLayout from '../components/main-posts-layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import posts from '../data/posts'

const OthereventsPage = () => (
  <MainPostsLayout title={'소식 / 자료실'} subtitle={'기타'} postList={posts.filter(post => post.type === '기타')}/>
)

export default OthereventsPage
