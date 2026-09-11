import React from 'react'
import s from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import theme from '../theme'

const MainPanelWrapper = s.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  max-height: 560px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    min-height: 300px;
    max-height: 400px;
  }
`

const HeroOverlay = s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 46, 76, 0.45) 0%,
    rgba(26, 46, 76, 0.65) 100%
  );
  z-index: 2;
`

const HeroContent = s.div`
  position: absolute;
  z-index: 3;
  text-align: center;
  padding: 0 24px;
`

const HeroTitle = s.h1`
  font-family: ${theme.fonts.serif};
  color: ${theme.colors.textLight};
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = s.p`
  font-family: ${theme.fonts.sans};
  color: ${theme.colors.accent};
  font-size: 1.15rem;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.15em;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    font-size: 0.95rem;
  }
`

const AccentLine = s.div`
  width: 60px;
  height: 3px;
  background: ${theme.colors.accent};
  margin: 20px auto 0;
  border-radius: 2px;
`

const MainPanel = () => (
  <MainPanelWrapper>
    <StaticImage
      src="../images/정기총회.jpeg"
      loading="eager"
      alt="고씨중앙종문회 정기총회"
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
    <HeroContent>
      <HeroTitle>고씨중앙종문회</HeroTitle>
      <HeroSubtitle>탐라국의 왕손</HeroSubtitle>
      <AccentLine />
    </HeroContent>
  </MainPanelWrapper>
)

export default MainPanel
