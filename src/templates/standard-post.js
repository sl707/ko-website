import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'

const StandardPost = ({ pageContext: { post } }) => {
  return (
  <Layout>
    <img
      src={post.image}
      alt="MISSING JPG"
    />
    {post.text}
  </Layout>
  )
}

export default StandardPost
