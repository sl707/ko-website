import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

const BlockWrapper = s(Link)`
  display: block;
  position: relative;
  align-items: center;
  justify-content: center;
  border: thin solid black;
  margin: 30px 50px;
  text-decoration: none;
  text-align: center;
  width: 300px;
  height: 200px;
  background-color: white;
  @media screen and (max-width: 750px) {
    margin: 8px;
  }
`

const BlockImage = s.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  opacity: 0.3;
  object-fit: cover;
  overflow: hidden;
`

const BlockText = s.div`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 30%;
  font-size: 25px;
`

const LinkBlock = props => (
  <BlockWrapper to={props.blkLink}>
    <BlockText>
      {props.blkTitle}
      <br />
      {props.blkTitle2}
    </BlockText>
    <BlockImage src={props.blkImage} alt="MISSING PNG"/>
  </BlockWrapper>
)

export default LinkBlock
