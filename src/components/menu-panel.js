import React from 'react'
import s from 'styled-components'
import LinkBlock from './link-block'
import theme from '../theme'

const MenuWrapper = s.section`
  background-color: ${theme.colors.primary};
  padding: 56px var(--size-gutter);

  @media screen and (max-width: 750px) {
    padding: 40px var(--size-gutter);
  }
`

const MenuInner = s.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`

const MenuTitle = s.h2`
  font-family: ${theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.textLight};
  text-align: center;
  margin: 0 0 32px;
  letter-spacing: 0.05em;
`

const MenuGrid = s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const MenuPanel = () => (
  <MenuWrapper>
    <MenuInner>
      <MenuTitle>바로가기</MenuTitle>
      <MenuGrid>
        <LinkBlock blkImage={'/신문단체.jpg'} blkTitle={'고씨종보'} blkLink={'/newspaper/'} />
        <LinkBlock blkImage={'/이사회22.JPG'} blkTitle={'중앙종문회'} blkLink={'/introduction/'} />
        <LinkBlock blkImage={'/왕위전2.jpg'} blkTitle={'항렬표'} blkLink={'/nameorder/'} />
        <LinkBlock blkImage={'/연원.jpg'} blkTitle={'역 사'} blkLink={'/father/'} />
        <LinkBlock blkImage={'/news/130main.jpg'} blkTitle={'임 원'} blkLink={'/centralmembers/'} />
        <LinkBlock blkImage={'/종문회빌딩.jpeg'} blkTitle={'오시는 길'} blkLink={'/contact/'} />
      </MenuGrid>
    </MenuInner>
  </MenuWrapper>
)

export default MenuPanel
