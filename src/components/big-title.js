import React from 'react'
import s from 'styled-components'

import { SubHeading, Text } from '../data/typography'

const OuterWrapper = s.div`
  position: absolute;
  top: 35%;
  z-index: 3;
  border: 3px solid #663946;
  background-color: #667f73;
  border-style: outset;
`

const MiddleWrapper = s.div`
  z-index: 4;
  border: 10px solid #667f73;
  border-style: outset;
`

const InnerWrapper = s.div`
  z-index: 5;
  border: 3px solid #663946;
  border-style: outset;
  background-color: #292929;
  padding: 10px 25px;
`

const InnerText = s.div`
  padding: 0px;
  margin: 0;
  color: white;
  font-size: 35px;
  background: #292929;
`

const BigTitle = props => (
  <OuterWrapper><MiddleWrapper>
    <InnerWrapper>
      {props.subtext && <InnerText style={{ fontSize: '20px' }}>{props.subtext}</InnerText>}
      <InnerText>{props.text}</InnerText>
    </InnerWrapper>
    </MiddleWrapper></OuterWrapper>
)

export default BigTitle
