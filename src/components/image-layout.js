import React from "react"
import s from 'styled-components'
import Layout from "./layout"

const ImageWrapper = s.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ImageLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <ImageWrapper
      src={props.imageUrl}
      alt="MISSING JPG"
    />
  </Layout>
)

export default ImageLayout
