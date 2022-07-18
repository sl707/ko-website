import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'

const MainPostsLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    개발중...
  </Layout>
)

export default MainPostsLayout
