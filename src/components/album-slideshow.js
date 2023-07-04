import React, { useState } from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import navLinks from '../data/navigation'
import postList from '../data/posts'
import PostBlock from './post-block'
import LeftArrow from '../images/slide-arrow-left.svg'
import RightArrow from '../images/slide-arrow-right.svg'
import SmallRightArrow from '../images/slide-arrow-right-small.svg'
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
  padding: 10px;
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

const AlbumContainer = s.div`
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
`

const AlbumSlideshowLeftButton = s.img`
  // border: solid black;
  // border-width: 0 5px 5px 0;
  // padding: 5px;
  // transform: rotate(135deg);
  // -webkit-transform: rotate(135deg);
  // // color: white;
  padding-left: 5px;
`

const AlbumSlideshowRightButton = s.img`
  // border: solid black;
  // border-width: 0 5px 5px 0;
  // padding: 5px;
  // transform: rotate(-45deg);
  // -webkit-transform: rotate(-45deg);
`

const AlbumSlideshowImage = s.img`
  margin: 0;
  width: 100%;
`

const AlbumSlideTitle = s.p`
  font-size: 30px;
  font-weight: 600;
  // color: white;
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 20px;
  }
`

const AlbumSlideText = s.p`
  font-size: 20px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`

const AlbumSlideContinue = s(Link)`
  text-decoration: none;
  border: solid black;
  width:fit-content;
  padding: 7px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcf9fc;
  gap: 5px;
`

const firstFivePosts = postList.slice(0, 5)

const increaseSlide = (slideNum, slideNumFunc) => {
  if (slideNum === 5) {
    slideNumFunc(1)
  } else {
    slideNumFunc(slideNum + 1)
  }
}

const decreaseSlide = (slideNum, slideNumFunc) => {
  if (slideNum === 1) {
    slideNumFunc(5)
  } else {
    slideNumFunc(slideNum - 1)
  }
}

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <AlbumSubwrapper>
      <AlbumSubtitle>
        새소식
      </AlbumSubtitle>
      <AlbumSubwrapper1>
      <AlbumSlideshowLeftButton src={LeftArrow} alt="Left Arrow" onClick={() => decreaseSlide(slideNumber, setSlideNumber)} />
      <AlbumSubwrapper2>
        <AlbumSlideshowWrapper>
          {/* {firstFivePosts.map(post => (
            <AlbumSlideshowSlide>
              <AlbumSlideshowImage src={post.image} />
              <AlbumSlideshowImageText>
                {post.text}
              </AlbumSlideshowImageText>
            </AlbumSlideshowSlide>
          ))} */}
          <Link to={`/post/${firstFivePosts[slideNumber - 1].postId}`}>
            {slideNumber === 1 && <AlbumSlideshowImage src={firstFivePosts[0].image} alt='Missing Image'/>}
            {slideNumber === 2 && <AlbumSlideshowImage src={firstFivePosts[1].image} alt='Missing Image'/>}
            {slideNumber === 3 && <AlbumSlideshowImage src={firstFivePosts[2].image} alt='Missing Image'/>}
            {slideNumber === 4 && <AlbumSlideshowImage src={firstFivePosts[3].image} alt='Missing Image'/>}
            {slideNumber === 5 && <AlbumSlideshowImage src={firstFivePosts[4].image} alt='Missing Image'/>}
          </Link>
        </AlbumSlideshowWrapper>
        <AlbumSlideDescriptionWrapper>
          <AlbumSlideTitle>
          {firstFivePosts[slideNumber - 1].title}

          </AlbumSlideTitle>
          <AlbumSlideText>
          {firstFivePosts[slideNumber - 1].text.slice(0, 150)}...
          
          </AlbumSlideText>
            <AlbumSlideContinue to={`/post/${firstFivePosts[slideNumber - 1].postId}`}>
            {'더보기'}
            <img src={ContinueArrow} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0'}}/>
            </AlbumSlideContinue>
        </AlbumSlideDescriptionWrapper>
        </AlbumSubwrapper2>
        <AlbumSlideshowRightButton src={RightArrow} alt="Right Arrow" onClick={() => increaseSlide(slideNumber, setSlideNumber)} />

      </AlbumSubwrapper1>
    </AlbumSubwrapper>
  )
}

export default AlbumSubpanel
