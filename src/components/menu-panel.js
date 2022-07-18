import React from 'react'
import s from 'styled-components'

import LinkBlock from './link-block'

const MenuSubwrapper = s.div`
  display: flex;
  position: relative;
  align-items: center:
  justify-content: center;
  width: 100%;
  padding: 20px 50px 20px 50px;
`

const MenuPanel = () => (
  <MenuSubwrapper>
    <LinkBlock blkImage={'example.png'} blkTitle={'고씨종보'} blkLink={'/newspaper/'}/>
    <LinkBlock blkImage={'example.png'} blkTitle={'중앙종문회'} blkLink={'/introduction/'}/>
    <LinkBlock blkImage={'example.png'} blkTitle={'항렬표'} blkLink={'/nameorder/'}/>
    <LinkBlock blkImage={'example.png'} blkTitle={'역사'} blkLink={'/father/'}/>
    <LinkBlock blkImage={'example.png'} blkTitle={'임원'} blkLink={'/centralmembers/'}/>
    <LinkBlock blkImage={'example.png'} blkTitle={'연락/오시는 길'} blkLink={'/contact/'}/>
  </MenuSubwrapper>
)

export default MenuPanel
