import React from "react"

import Layout from "./layout"

const ImageLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <img
      src={props.imageUrl}
      alt="MISSING JPG"
    />
  </Layout>
)

export default ImageLayout
