import React from "react"
import s from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const PageHeader = s.h1`
  z-index: 1;
  position: absolute;
  color: white;
  background-color: black;
`

const PageTitleWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const PageTitle = props => (
  <PageTitleWrapper>
    <PageHeader>
      {props.pageTitle}
    </PageHeader>
    <StaticImage
            src="../images/성주전.jpeg"
            loading="eager"
            alt="MISSING"
            style={{
              position: 'relative',
              objectFit: 'cover',
              width: '100%',
              opacity: '0.7'
            }}
    />
  </PageTitleWrapper>
)

export default PageTitle
