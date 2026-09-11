import React from 'react'
import s from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import theme from '../theme'

const PageTitleWrapper = s.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  overflow: hidden;
`

const HeroOverlay = s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 46, 76, 0.5) 0%,
    rgba(26, 46, 76, 0.7) 100%
  );
  z-index: 2;
`

const PageHeader = s.h1`
  position: absolute;
  z-index: 3;
  font-family: ${theme.fonts.serif};
  color: ${theme.colors.textLight};
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    font-size: 1.75rem;
  }
`

const PageTitle = props => (
  <PageTitleWrapper>
    <StaticImage
      src="../images/성주전.jpeg"
      loading="eager"
      alt=""
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      imgStyle={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
    <HeroOverlay />
    <PageHeader>{props.pageTitle}</PageHeader>
  </PageTitleWrapper>
)

export default PageTitle
