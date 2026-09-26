import React from 'react'
import Layout from './layout'
import OptimizedImage from './optimized-image'
import * as styles from './image-layout.module.css'

const ImageLayout = ({ title, subtitle, imageUrl }) => (
  <Layout pageTitle={title} pageSubtitle={subtitle}>
    <div className={styles.wrapper}>
      <div className={styles.imageFrame}>
        <OptimizedImage
          className={styles.image}
          src={imageUrl}
          alt={subtitle || title || ''}
          profile="content"
        />
      </div>
    </div>
  </Layout>
)

export default ImageLayout
