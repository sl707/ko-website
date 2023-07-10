import React from 'react'
import s from 'styled-components'

const InfoBlockWrapper = s.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const InfoBlockWrapper1 = s.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 1100px) {
    display: none;
  }
`

const InfoBlockImage = s.img`
  display: flex;
  max-height: 400px;
`

const InfoBlockImageWrapper = s.div`
  display: flex;
  flex-basis: 40%;
  padding: 5px 0;
`

const InfoBlockText = s.p`
  display: flex;
  flex-basis: 50%;
  font-size: 17px;
  white-space: pre-wrap;
  padding: 5px 0;
  text-align: justify;
  text-justify: inter-word;
`

const InfoBlockSubtitle = s.p`
  display: flex;
  align-self: flex-start;
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  white-space: pre-wrap;
`

const BlockContent = ({ image, text, order, subtitle }) => (
  <>
    {order % 2 === 0 && <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>}
    <InfoBlockSubtitle>{subtitle}</InfoBlockSubtitle>
    <InfoBlockText>{text}</InfoBlockText>
    {order % 2 === 1 && <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>}
  </>
)

const BlockContent1 = ({ image, text, order, subtitle }) => (
  <>
    <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>
    <InfoBlockSubtitle>{subtitle}</InfoBlockSubtitle>
    <InfoBlockText>{text}</InfoBlockText>
  </>
)

const InfoBlock = ({ image, text, order, subtitle }) => (
  <>
    <InfoBlockWrapper>
      <BlockContent image={image} text={text} order={order} subtitle={subtitle} />
    </InfoBlockWrapper>
    <InfoBlockWrapper1>
      <BlockContent1 image={image} text={text} order={order} subtitle={subtitle} />
    </InfoBlockWrapper1>
  </>
)

export default InfoBlock