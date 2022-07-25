import React from "react"

import Layout from "./layout"

const ImageLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <img
      src={props.imageUrl}
      alt="MISSING JPG"
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        minWidth: '400px'
      }}
    />
  </Layout>
)

export default ImageLayout
