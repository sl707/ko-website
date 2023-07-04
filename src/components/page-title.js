import React from "react"
import s from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const PageHeader = s.div`
  z-index: 1;
  position: absolute;
  color: white;
  // background-color: #292929;
  // border: 5px solid #663946;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  // border-style: outset;
  padding: 10px 15px;
  font-size: 35px;
  // width: 200px;
  // height: 60px;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    // width: 180px;
    // height: 45px;
    font-size: 30px;
  }
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
              opacity: '1',
              filter: 'brightness(50%)'
            }}
    />
  </PageTitleWrapper>
)

export default PageTitle
