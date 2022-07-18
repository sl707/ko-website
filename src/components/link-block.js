import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

const BlockWrapper = s(Link)`
  display: table-row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: thin solid black;
  margin: 10px 10px 10px 10px;
`

const BlockImage = s.img`
  position: relative;
`

const BlockText = s.h4`
  position: relative;
`

const LinkBlock = props => (
  <BlockWrapper to={props.blkLink}>
    <BlockImage src={props.blkImage} alt="MISSING PNG"/>
    <BlockText>
      {props.blkTitle}
    </BlockText>
  </BlockWrapper>
)

export default LinkBlock
