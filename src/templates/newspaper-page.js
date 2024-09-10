import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'

const NewsWrapper = s.div`
`

const NewsImage = s.img`
  width: 100%
`

const NewspaperPage = ({ pageContext: { paper } }) => (
  <Layout pageTitle={'종보'} pageSubtitle={`${paper.newsNumber}호`}>
    <NewsWrapper>
      <NewsImage src={`/news/${paper.newsNumber}-1.${paper.newsImageType ?? 'jpg'}`} />
      {!paper.newsFirstOnly && 
        <>
          <NewsImage src={`/news/${paper.newsNumber}-2.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-3.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-4.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-5.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-6.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-7.${paper.newsImageType ?? 'jpg'}`} />
          <NewsImage src={`/news/${paper.newsNumber}-8.${paper.newsImageType ?? 'jpg'}`} />
          {
            paper.newsNumPages >= 12 &&
            <>
              <NewsImage src={`/news/${paper.newsNumber}-9.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-10.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-11.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-12.${paper.newsImageType ?? 'jpg'}`} />
            </>
          }
          {
            paper.newsNumPages >= 16 &&
            <>
              <NewsImage src={`/news/${paper.newsNumber}-13.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-14.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-15.${paper.newsImageType ?? 'jpg'}`} />
              <NewsImage src={`/news/${paper.newsNumber}-16.${paper.newsImageType ?? 'jpg'}`} />
            </>
          }
        </>
      }
    </NewsWrapper>
  </Layout>
)

export default NewspaperPage
