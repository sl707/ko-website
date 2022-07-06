import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainPanelWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`

// const MainPanelText = s.h1`
//   position: absolute;
//   top: 15%;
//   color: white;
// `

const MainPanel = () => (
  <MainPanelWrapper>
    <StaticImage
     src="../images/왕위전단체.jpeg"
     loading="eager"

    />
    {/* <MainPanelText>
      탐라국의 왕손, 고씨
    </MainPanelText> */}
  </MainPanelWrapper>
)

export default MainPanel
