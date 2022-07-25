import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'

const NewsWrapper = s.div`
`

const NewsImage = s.img`
`

const NewspaperPage = ({ pageContext: { paper } }) => (
  <Layout pageTitle={'종보'} pageSubtitle={`${paper.newsNumber}호`}>
    <NewsWrapper>
      <NewsImage src={`/news/${paper.newsNumber}-1.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-2.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-3.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-4.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-5.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-6.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-7.jpg`} />
      <NewsImage src={`/news/${paper.newsNumber}-8.jpg`} />
    </NewsWrapper>
  </Layout>
)

export default NewspaperPage
