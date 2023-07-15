import React, { useState } from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import slideList from '../data/slides'
import LeftArrow from '../images/slide-arrow-left.svg'
import RightArrow from '../images/slide-arrow-right.svg'
import ContinueArrow from '../images/continue-arrow.svg'

const AlbumSubwrapper = s.div`
  // margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  // background-color: #dafffb;
  background-color: white;
  // border: 3px solid grey;
  // padding: 15px;
`

const AlbumSubtitle = s.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  padding-top: 25px;
  // color: white;
  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`

const AlbumSubwrapper1 = s.div`
  // margin: 10px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  // border: 3px solid grey;
  padding: 60px 0;
  @media screen and (max-width: 800px) {
    padding: 20px 0;
  }
`

const AlbumSubwrapper2 = s.div`
// margin: 10px;
display: flex;
position: relative;
align-items: center;
flex-basis: 90%;
justify-content: space-around;
// border: 3px solid grey;
@media screen and (max-width: 800px) {
  flex-direction: column;
}
`

const AlbumSlideshowWrapper = s.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  flex-basis: 45%;
`

const AlbumSlideDescriptionWrapper = s.div`
  display: flex;
  // color: white;
  flex-direction: column;
  // justify-content: flex-start;
  // width: 50%;
  flex-basis: 45%;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const AlbumSlideshowLeftButton = s.img`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  background-color: #ebfeff;
  border: solid black;
  border-width: thin;
  border-radius: 20px;
`

const AlbumSlideshowRightButton = s.img`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  background-color: #ebfeff;
  border: solid black;
  border-width: thin;
  border-radius: 20px;
`

const AlbumSlideshowImage = s.img`
  margin: 0;
  width: 100%;
`

const AlbumSlideTitle = s.p`
  font-size: 30px;
  font-weight: 600;
  // color: white;
  text-align: center;
  margin: 0;  
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`

const AlbumSlideText = s.p`
  font-size: 20px;
  padding-bottom: 15px;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`

const AlbumSlideContinue = s(Link)`
  text-decoration: none;
  border: solid black;
  width: fit-content;
  padding: 7px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebfeff;
  gap: 5px;
  border-width: thin;
  align-self: center;
`

const AlbumSlideDate = s.p`
  font-size: 20px;
  // color: white;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`

const AlbumSlideOptionsWrapper = s.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const firstFiveSlides = slideList.slice(0, 5)

const increaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 5 ? slideNumFunc(1) : slideNumFunc(slideNum + 1)
}

const decreaseSlide = (slideNum, slideNumFunc) => {
  slideNum === 1 ? slideNumFunc(5) : slideNumFunc(slideNum - 1)
}

const getSlideImage = slideData => {
  return slideData.type === 'post' ? slideData.image : slideData.newsImage
}

const getSlideTitle = slideData => {
  return slideData.type === 'post' ? slideData.title : `고씨종보 ${slideData.newsNumber}호`
}

const getSlideDate = slideData => {
  return slideData.type === 'post'
    ? `(${slideData.date.toLocaleString('en-CA').slice(0, 10)})`
    : `(${slideData.newsDate.toLocaleString('en-CA').slice(0, 10)})`
}

const getSlideText = slideData => {
  return slideData.type === 'post' ? `${slideData.text.slice(0, 150)}...` :  ""
}

const getSlideUrl = slideData => {
  return slideData.type === 'post'
    ? `/post/${slideData.postId}`
    : `/newspaper/${slideData.newsNumber}`
}

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  console.log(firstFiveSlides)
  return (
    <AlbumSubwrapper>
      <AlbumSubtitle>
        새소식
      </AlbumSubtitle>
      <AlbumSubwrapper1>
        {/* <AlbumSlideshowLeftButton src={LeftArrow} alt="Left Arrow" onClick={() => decreaseSlide(slideNumber, setSlideNumber)} style={{transform: 'rotate(180deg)'}}/> */}
        <AlbumSubwrapper2>
          <AlbumSlideshowWrapper>
            <Link to={getSlideUrl(firstFiveSlides[slideNumber - 1])} style={{ height: '100%', width: '100%' }}>
              <AlbumSlideshowImage src={getSlideImage(firstFiveSlides[0])} alt='Missing Image' style={{ display: slideNumber !== 1 && 'none'}}/>
              <AlbumSlideshowImage src={getSlideImage(firstFiveSlides[1])} alt='Missing Image' style={{ display: slideNumber !== 2 && 'none'}}/>
              <AlbumSlideshowImage src={getSlideImage(firstFiveSlides[2])} alt='Missing Image' style={{ display: slideNumber !== 3 && 'none'}}/>
              <AlbumSlideshowImage src={getSlideImage(firstFiveSlides[3])} alt='Missing Image' style={{ display: slideNumber !== 4 && 'none'}}/>
              <AlbumSlideshowImage src={getSlideImage(firstFiveSlides[4])} alt='Missing Image' style={{ display: slideNumber !== 5 && 'none'}}/>
            </Link>
          </AlbumSlideshowWrapper>
          <AlbumSlideDescriptionWrapper>
            <AlbumSlideTitle>
              {getSlideTitle(firstFiveSlides[slideNumber - 1])}
            </AlbumSlideTitle>
            <AlbumSlideDate>
              {getSlideDate(firstFiveSlides[slideNumber - 1])}
            </AlbumSlideDate>
            <AlbumSlideText>
              {getSlideText(firstFiveSlides[slideNumber - 1])}
            </AlbumSlideText>
            <AlbumSlideOptionsWrapper>
              <AlbumSlideshowLeftButton src={LeftArrow} alt="Left Arrow" onClick={() => decreaseSlide(slideNumber, setSlideNumber)} style={{transform: 'rotate(180deg)'}}/>
              <AlbumSlideContinue to={getSlideUrl(firstFiveSlides[slideNumber - 1])}>
                {'더보기'}
                <img src={ContinueArrow} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0'}}/>
              </AlbumSlideContinue>
              <AlbumSlideshowRightButton src={RightArrow} alt="Right Arrow" onClick={() => increaseSlide(slideNumber, setSlideNumber)} />
            </AlbumSlideOptionsWrapper>
          </AlbumSlideDescriptionWrapper>
        </AlbumSubwrapper2>
        {/* <AlbumSlideshowRightButton src={RightArrow} alt="Right Arrow" onClick={() => increaseSlide(slideNumber, setSlideNumber)} /> */}
      </AlbumSubwrapper1>
    </AlbumSubwrapper>
  )
}

export default AlbumSubpanel
