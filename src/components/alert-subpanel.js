import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { navLinks } from '../data/navigation'

const AlertSubwrapper = s.div`
`

const AlertSubtitle = s.h1`
`

const AlertTableWrapper = s.div`
`

const AlertTableLink = s.div`
`

const AlertSubpanel = () => (
  <AlertSubwrapper>
    <AlertSubtitle>
      공지사항
    </AlertSubtitle>
    <AlertTableWrapper>
      Table
    </AlertTableWrapper>
  </AlertSubwrapper>
)

export default AlertSubpanel
