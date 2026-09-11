import React from 'react'
import s from 'styled-components'
import theme from '../theme'

const FooterWrapper = s.footer`
  background-color: ${theme.colors.footer};
  color: rgba(255, 255, 255, 0.85);
  padding: 40px var(--size-gutter);
  margin-top: auto;
`

const FooterInner = s.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  text-align: center;

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`

const FooterTitle = s.div`
  font-family: ${theme.fonts.serif};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.textLight};
  margin-bottom: 12px;
`

const FooterText = s.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`

const FooterDivider = s.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 16px 0;
`

const FooterCopyright = s.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <FooterTitle>고씨중앙종문회</FooterTitle>
      <FooterText>주소: 서울시 광진구 천호대로 617(중곡동), (우)04931</FooterText>
      <FooterText>
        Address: 617 Cheonho-daero, Gwangjin-gu, Seoul 04931
      </FooterText>
      <FooterText>대표전화: 02-755-0919 &nbsp;|&nbsp; FAX: 02-790-3360</FooterText>
      <FooterText>artspeech@hanmail.net</FooterText>
      <FooterDivider />
      <FooterCopyright>
        Copyright © {new Date().getFullYear()} 고씨중앙종문회. All rights reserved.
      </FooterCopyright>
    </FooterInner>
  </FooterWrapper>
)

export default Footer
