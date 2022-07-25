import React from 'react'
import s from 'styled-components'

import LinkBlock from './link-block'

const MenuSubwrapper = s.div`
  display: block;
  position: relative;
  align-items: center:
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #FFFCB9;
`

const MenuSubsubwrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 750px) {
    display: none;
  }
`

const MenuSubsubwrapperTwo = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 750px) {
    display: none;
  }
`

const MenuPanel = () => (
  <MenuSubwrapper>
    <MenuSubsubwrapper>
      <LinkBlock blkImage={'/신문단체.jpg'} blkTitle={'고씨종보'} blkLink={'/newspaper/'}/>
      <LinkBlock blkImage={'/이사회22.jpg'} blkTitle={'중앙종문회'} blkLink={'/introduction/'}/>
      <LinkBlock blkImage={'/왕위전2.jpg'} blkTitle={'항렬표'} blkLink={'/nameorder/'}/>
    </MenuSubsubwrapper>
    <MenuSubsubwrapper>
      <LinkBlock blkImage={'/연원.jpg'} blkTitle={'역 사'} blkLink={'/father/'}/>
      <LinkBlock blkImage={'/news/130main.jpg'} blkTitle={'임 원'} blkLink={'/centralmembers/'}/>
      <LinkBlock blkImage={'/종문회빌딩.jpeg'} blkTitle={'오시는 길'} blkLink={'/contact/'}/>
    </MenuSubsubwrapper>
    <MenuSubsubwrapperTwo>
      <LinkBlock blkImage={'/신문단체.jpg'} blkTitle={'고씨종보'} blkLink={'/newspaper/'}/>
      <LinkBlock blkImage={'/이사회22.jpg'} blkTitle={'중앙종문회'} blkLink={'/introduction/'}/>
    </MenuSubsubwrapperTwo>
    <MenuSubsubwrapperTwo>
      <LinkBlock blkImage={'/왕위전2.jpg'} blkTitle={'항렬표'} blkLink={'/nameorder/'}/>
      <LinkBlock blkImage={'/연원.jpg'} blkTitle={'역 사'} blkLink={'/father/'}/>
    </MenuSubsubwrapperTwo>
    <MenuSubsubwrapperTwo>
      <LinkBlock blkImage={'/news/130main.jpg'} blkTitle={'임 원'} blkLink={'/centralmembers/'}/>
      <LinkBlock blkImage={'/종문회빌딩.jpeg'} blkTitle={'오시는 길'} blkLink={'/contact/'}/>
    </MenuSubsubwrapperTwo>
  </MenuSubwrapper>
)

export default MenuPanel
