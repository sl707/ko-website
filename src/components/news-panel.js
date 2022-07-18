import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import AlbumSlideshow from './album-slideshow'
import AlertTable from './alert-table'

const NewsPanelWrapper = s.div`
  display: flex;
  position: relative;
  padding: 100px 20px 100px 20px;
  // background-image: url("삼성혈.jpg");
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  overflow: hidden;
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
  <NewsPanelWrapper>
    <NewsPanelBackground src={'/삼성혈.jpeg'} />
    <AlbumSlideshow />
    <AlertTable />
  </NewsPanelWrapper>
)

export default NewsPanel
