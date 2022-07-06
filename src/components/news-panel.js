import React from 'React'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import AlbumSubpanel from '../components/album-subpanel'
import AlertSubpanel from '../components/alert-subpanel'

const NewsPanelWrapper = s.div`
`

const NewsPanel = () => (
  <NewsPanelWrapper>
    <AlbumSubpanel />
    <AlertSubpanel />
  </NewsPanelWrapper>
)

export default NewsPanel
