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
  justify-content: center;
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
  font-size: 20px;
  white-space: pre-wrap;
  padding: 5px 0;
`

const BlockContent = ({ image, text, order }) => (
  <>
    {order % 2 === 0 && <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>}
    <InfoBlockText>{text}</InfoBlockText>
    {order % 2 === 1 && <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>}
  </>
)

const BlockContent1 = ({ image, text, order }) => (
  <>
    <InfoBlockImageWrapper><InfoBlockImage src={image} alt='missing' /></InfoBlockImageWrapper>
    <InfoBlockText>{text}</InfoBlockText>
  </>
)

const InfoBlock = ({ image, text, order }) => (
  <>
    <InfoBlockWrapper>
      <BlockContent image={image} text={text} order={order} />
    </InfoBlockWrapper>
    <InfoBlockWrapper1>
      <BlockContent1 image={image} text={text} order={order} />
    </InfoBlockWrapper1>
  </>
)

export default InfoBlock