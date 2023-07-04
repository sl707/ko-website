import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import AlbumSlideshow from './album-slideshow'
import AlertTable from './alert-table'

const NewsPanelWrapper = s.div`
  display: flex;
  position: relative;
  padding: 75px;
  overflow: hidden;
  justify-content: center;
  background-color
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 25px;
  }
`

const NewsPanelBackground = s.img`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: -5;
  opacity: 0.5;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`

const NewsPanel = () => (
  // <NewsPanelWrapper>
    // {/* <NewsPanelBackground src={'/삼성혈.jpg'} /> */}
    <AlbumSlideshow />
    // {/* <AlertTable /> */}
  // </NewsPanelWrapper>
)

export default NewsPanel
