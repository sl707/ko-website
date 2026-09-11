import React, { useState } from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import LeftArrow from '../images/slide-arrow-left.svg'
import RightArrow from '../images/slide-arrow-right.svg'
import ContinueArrow from '../images/continue-arrow.svg'
import theme from '../theme'

const AlbumSection = s.section`
  background-color: ${theme.colors.surface};
  padding: 56px var(--size-gutter);

  @media screen and (max-width: 800px) {
    padding: 32px var(--size-gutter);
  }
`

const AlbumInner = s.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`

const SectionTitle = s.h2`
  font-family: ${theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-align: center;
  margin: 0 0 32px;
`

const AlbumContent = s.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 24px;
  }
`

const ImageWrapper = s.div`
  flex: 1;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
`

const AlbumSlideshowImage = s.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`

const CaptionText = s.p`
  font-size: 0.85rem;
  font-style: italic;
  color: ${theme.colors.textMuted};
  text-align: center;
  margin: 8px 0 0;
`

const DescriptionWrapper = s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const AlbumSlideTitle = s.h3`
  font-family: ${theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0;
  line-height: 1.4;
`

const AlbumSlideDate = s.p`
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  font-weight: 500;
  margin: 0;
`

const AlbumSlideText = s.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${theme.colors.textMuted};
  margin: 0;
  text-align: justify;
  word-break: keep-all;
`

const ControlsRow = s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`

const NavButton = s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.full};
  background: ${theme.colors.background};
  cursor: pointer;
  transition: background-color ${theme.transitions.fast},
    border-color ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.backgroundAlt};
    border-color: ${theme.colors.accent};
  }

  img {
    width: 16px;
    height: 16px;
  }
`

const AlbumSlideContinue = s(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.textLight};
  background: ${theme.colors.primary};
  padding: 10px 20px;
  border-radius: ${theme.radius.full};
  transition: background-color ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primaryLight};
    color: ${theme.colors.textLight};
  }

  img {
    width: 14px;
    height: 14px;
    filter: brightness(10);
  }
`

const SlideDots = s.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`

const SlideDot = s.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${props => (props.$active ? theme.colors.accent : theme.colors.border)};
  transition: background-color ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.accent};
  }
`

const firstFiveSlides = slideList.slice(0, 5)

const increaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 5 ? slideNumFunc(1) : slideNumFunc(slideNum + 1)
}

const decreaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 1 ? slideNumFunc(5) : slideNumFunc(slideNum - 1)
}

const getSlideImage = slideData =>
  slideData.type === 'post' ? slideData.image : slideData.newsImage

const getSlideTitle = slideData =>
  slideData.type === 'post'
    ? slideData.title
    : `고씨종보 ${slideData.newsNumber}호`

const getSlideDate = slideData =>
  slideData.type === 'post'
    ? `${slideData.date.toLocaleString('en-CA').slice(0, 10)}`
    : `${slideData.newsDate.toLocaleString('en-CA').slice(0, 10)}`

const getSlideText = slideData =>
  slideData.type === 'post' && slideData.text !== ''
    ? `${slideData.text.slice(0, 150)}...`
    : ''

const getSlideUrl = slideData =>
  slideData.type === 'post'
    ? `/post/${slideData.postId}`
    : `/newspaper/${slideData.newsNumber}`

const getSlideCaption = slideData => slideData.imageCaption

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  const currentSlide = firstFiveSlides[slideNumber - 1]

  return (
    <AlbumSection>
      <AlbumInner>
        <SectionTitle>소식</SectionTitle>
        <AlbumContent>
          <ImageWrapper>
            <Link to={getSlideUrl(currentSlide)}>
              <AlbumSlideshowImage
                src={getSlideImage(currentSlide)}
                alt={getSlideTitle(currentSlide)}
              />
            </Link>
            {getSlideCaption(currentSlide) && (
              <CaptionText>{getSlideCaption(currentSlide)}</CaptionText>
            )}
          </ImageWrapper>
          <DescriptionWrapper>
            <AlbumSlideTitle>{getSlideTitle(currentSlide)}</AlbumSlideTitle>
            <AlbumSlideDate>{getSlideDate(currentSlide)}</AlbumSlideDate>
            {getSlideText(currentSlide) && (
              <AlbumSlideText>{getSlideText(currentSlide)}</AlbumSlideText>
            )}
            <ControlsRow>
              <NavButton
                onClick={() => decreaseSlide(slideNumber, setSlideNumber)}
                aria-label="이전"
              >
                <img src={LeftArrow} alt="" style={{ transform: 'rotate(180deg)' }} />
              </NavButton>
              <AlbumSlideContinue to={getSlideUrl(currentSlide)}>
                더보기
                <img src={ContinueArrow} alt="" />
              </AlbumSlideContinue>
              <NavButton
                onClick={() => increaseSlide(slideNumber, setSlideNumber)}
                aria-label="다음"
              >
                <img src={RightArrow} alt="" />
              </NavButton>
              <SlideDots>
                {firstFiveSlides.map((_, i) => (
                  <SlideDot
                    key={i}
                    $active={slideNumber === i + 1}
                    onClick={() => setSlideNumber(i + 1)}
                    aria-label={`슬라이드 ${i + 1}`}
                  />
                ))}
              </SlideDots>
            </ControlsRow>
          </DescriptionWrapper>
        </AlbumContent>
      </AlbumInner>
    </AlbumSection>
  )
}

export default AlbumSubpanel
