import React, { useState } from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import navLinks from '../data/navigation'
import postList from '../data/posts'
import PostBlock from './post-block'

const AlbumSubwrapper = s.div`
  margin: 10px;
  display: table-row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFEE8;
  border: 3px solid grey;
  padding: 15px;
`

const AlbumSubtitle = s.h1`
  position: relative;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const AlbumSlideshowWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// const AlbumSlideshowGuide = s.div`
// `

const AlbumSlideshowLeftButton = s.i`
  border: solid black;
  border-width: 0 5px 5px 0;
  padding: 5px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`

const AlbumSlideshowRightButton = s.i`
  border: solid black;
  border-width: 0 5px 5px 0;
  padding: 5px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

const firstFivePosts = postList.slice(0, 5)

const increaseSlide = (slideNum, slideNumFunc) => {
  if (slideNum === 3) {
    slideNumFunc(1)
  } else {
    slideNumFunc(slideNum + 1)
  }
}

const decreaseSlide = (slideNum, slideNumFunc) => {
  if (slideNum === 1) {
    slideNumFunc(3)
  } else {
    slideNumFunc(slideNum - 1)
  }
}

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <AlbumSubwrapper>
      <AlbumSubtitle>
        소 식
      </AlbumSubtitle>
      <AlbumSlideshowWrapper>
        {/* {firstFivePosts.map(post => (
          <AlbumSlideshowSlide>
            <AlbumSlideshowImage src={post.image} />
            <AlbumSlideshowImageText>
              {post.text}
            </AlbumSlideshowImageText>
          </AlbumSlideshowSlide>
        ))} */}
        <AlbumSlideshowLeftButton onClick={() => decreaseSlide(slideNumber, setSlideNumber)} />
        {(slideNumber === 1) && <PostBlock post={firstFivePosts[0]} front={true}/>}
        {(slideNumber === 2) && <PostBlock post={firstFivePosts[1]} front={true}/>}
        {(slideNumber === 3) && <PostBlock post={firstFivePosts[2]} front={true}/>}
        {/* {(slideNumber === 4) && <PostBlock post={firstFivePosts[3]} front={true}/>}
        {(slideNumber === 5) && <PostBlock post={firstFivePosts[4]} front={true}/>} */}
        <AlbumSlideshowRightButton onClick={() => increaseSlide(slideNumber, setSlideNumber)} />
      </AlbumSlideshowWrapper>
    </AlbumSubwrapper>
  )
}

export default AlbumSubpanel
