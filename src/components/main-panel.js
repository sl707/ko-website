import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import BigTitle from './big-title'

const MainPanelWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`

const MainPanelText = s.h1`
  position: absolute;
  background-color: #fff7a2;
  top: 50%;
  color: #696969;
  z-index: 5;
  padding: 5px 5px 5px 5px;
`

const MainPanel = () => (
  <MainPanelWrapper>
    <BigTitle text={'고씨중앙종문회'} subtext={'탐라국의 왕손'} />
    {/* <MainPanelText>
      고씨중앙종문회
    </MainPanelText> */}
    <StaticImage
     src="../images/왕위전1.jpg"
     loading="eager"
     style={{
       objectFit: 'cover',
       minWidth: '100%',
       minHeight: '100%'
     }}
    />
    {/* <MainPanelText>
      탐라국의 왕손, 고씨
    </MainPanelText> */}
  </MainPanelWrapper>
)

export default MainPanel
