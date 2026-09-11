import React from 'react'
import Layout from './layout'
import * as styles from './image-layout.module.css'

const ImageLayout = props => (
  <Layout pageTitle={props.title} pageSubtitle={props.subtitle}>
    <img className={styles.wrapper} src={props.imageUrl} alt="" />
  </Layout>
)

export default ImageLayout
