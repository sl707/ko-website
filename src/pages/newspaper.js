import React from 'react'
import s from 'styled-components'

import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import news from '../data/newspapers'
import MainPostsLayout from '../components/main-posts-layout'

const NewspaperPage = () => (
  <MainPostsLayout title={'종 보'} postList={news} news={true} />
)

export default NewspaperPage
