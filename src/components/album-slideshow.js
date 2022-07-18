import React, { useState } from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import navLinks from '../data/navigation'
import postList from '../data/posts'

const AlbumSubwrapper = s.div`
  margin: auto;
  display: table-row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 3px solid grey;
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

const AlbumSlideshowSlide = s(Link)`
  border-collapse: collapse;
  text-decoration: none;
`

const AlbumSlideshowImage = s.img`
  margin: 0;
  display: flex;
  position: relative;
  width: 420px;
  height: 300px;
  object-fit: scale-down;
  border: 1px solid black;
`

const AlbumSlideshowImageText = s.div`
  margin: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
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

const firstFivePosts = postList.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)

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

const albumSlideTemplate = post => (
  <AlbumSlideshowSlide to={`/post/${post.postId}`}>
    <AlbumSlideshowImage src={post.image} />
    <AlbumSlideshowImageText>
      {post.title}
    </AlbumSlideshowImageText>
  </AlbumSlideshowSlide>
)

const AlbumSubpanel = () => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <AlbumSubwrapper>
      <AlbumSubtitle>
        앨범
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
        {(slideNumber === 1) && albumSlideTemplate(firstFivePosts[0])}
        {(slideNumber === 2) && albumSlideTemplate(firstFivePosts[1])}
        {(slideNumber === 3) && albumSlideTemplate(firstFivePosts[2])}
        {(slideNumber === 4) && albumSlideTemplate(firstFivePosts[3])}
        {(slideNumber === 5) && albumSlideTemplate(firstFivePosts[4])}
        <AlbumSlideshowRightButton onClick={() => increaseSlide(slideNumber, setSlideNumber)} />
      </AlbumSlideshowWrapper>
    </AlbumSubwrapper>
  )
}

export default AlbumSubpanel
