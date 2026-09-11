import React from 'react'
import s from 'styled-components'
import theme from '../theme'

const InfoBlockWrapper = s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  margin-bottom: 56px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
`

const InfoBlockImageWrapper = s.div`
  flex: 0 0 42%;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};

  @media screen and (max-width: 1100px) {
    flex: none;
    width: 100%;
    max-width: 480px;
  }
`

const InfoBlockImage = s.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 360px;
  object-fit: cover;
`

const InfoBlockText = s.div`
  flex: 1;
  font-size: 1rem;
  line-height: 1.85;
  white-space: pre-wrap;
  color: ${theme.colors.text};
  text-align: justify;
  text-justify: inter-word;
`

const InfoBlockSubtitle = s.h3`
  font-family: ${theme.fonts.serif};
  font-weight: 600;
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  margin: 0 0 12px;
`

const InfoBlock = ({ image, text, order, subtitle }) => (
  <InfoBlockWrapper>
    {order % 2 === 0 && (
      <InfoBlockImageWrapper>
        <InfoBlockImage src={image} alt="" />
      </InfoBlockImageWrapper>
    )}
    <InfoBlockText>
      {subtitle && <InfoBlockSubtitle>{subtitle}</InfoBlockSubtitle>}
      {text}
    </InfoBlockText>
    {order % 2 === 1 && (
      <InfoBlockImageWrapper>
        <InfoBlockImage src={image} alt="" />
      </InfoBlockImageWrapper>
    )}
  </InfoBlockWrapper>
)

export default InfoBlock
