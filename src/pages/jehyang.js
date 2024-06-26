import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import MainPostsLayout from '../components/main-posts-layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import {jehyangPostList} from '../data/posts'

const JehyangPage = () => (
  <MainPostsLayout title={'소식 / 자료실'} subtitle={'제향'} postList={jehyangPostList}/>
)

export default JehyangPage
