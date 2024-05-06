import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import Post from '../components/post'

const StandardPost = ({ pageContext: { post, type } }) => {
  return (
  <Layout pageTitle={type} pageSubtitle={post.title}>
    <Post imageUrl={post.image} imageTwoUrl={post.imageTwo} text={post.text} date={post.date}/>
  </Layout>
  )
}

export default StandardPost
