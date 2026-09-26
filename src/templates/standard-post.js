import React from 'react'

import AdjacentNav from '../components/adjacent-nav'
import Layout from '../components/layout'
import Post from '../components/post'

const StandardPost = ({ pageContext: { post, type, previousPost, nextPost } }) => {
  const postLink = item =>
    item ? { href: `/post/${item.postId}/`, title: item.title } : null

  return (
    <Layout pageTitle={type} pageSubtitle={post.title}>
      {previousPost || nextPost ? (
        <AdjacentNav
          label="다른 소식 보기"
          listHref="/posts/"
          listLabel="전체 목록"
          previousLabel="이전 소식"
          nextLabel="다음 소식"
          previous={postLink(previousPost)}
          next={postLink(nextPost)}
        />
      ) : null}
      <Post
        imageUrl={post.image}
        imageTwoUrl={post.imageTwo}
        imageCaption={post.imageCaption}
        text={post.text}
        date={post.date}
      />
    </Layout>
  )
}

export default StandardPost
