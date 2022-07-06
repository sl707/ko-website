import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const FooterWrapper = s.footer`
  margin: 0 auto;
  padding: var(--space-3) var(--size-gutter);
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #c2f1ff;
`

const FooterText = s.small`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-small;
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      Copyright © {new Date().getFullYear()} 고씨중앙종문회. All rights reserved.
    </FooterText>
    <FooterText>
      주소: 서울시 광진구 천호대로 617(중곡동), (우)04931
    </FooterText>
    <FooterText>
      Address: 617 Cheonho-daero, Gwangjin-gu, Seoul 04931
    </FooterText>
    <FooterText>
      대표전화: 02-755-0919
    </FooterText>
    <FooterText>
      FAX: 02-790-3360
    </FooterText>
    <FooterText>
      이메일: artspeech@hanmail.net
    </FooterText>
  </FooterWrapper>
)

export default Footer
