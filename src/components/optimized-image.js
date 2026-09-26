import React, { useEffect, useState } from 'react'

import generatedImages from '../data/generated-images.json'

const defaultSizes = {
  card: '(max-width: 600px) 100vw, 400px',
  feature: '(max-width: 700px) 100vw, 400px',
  content: '(max-width: 900px) calc(100vw - 32px), 800px',
}

const normalizeSource = src =>
  src && src.startsWith('/') ? src : `/${src || ''}`

const OptimizedImage = ({
  src,
  profile = 'card',
  sizes,
  loading = 'lazy',
  decoding = 'async',
  ...props
}) => {
  const normalizedSrc = normalizeSource(src)
  const [useOriginal, setUseOriginal] = useState(false)
  const generated = generatedImages[normalizedSrc]?.[profile]

  useEffect(() => {
    setUseOriginal(false)
  }, [normalizedSrc, profile])

  if (!generated || useOriginal) {
    return (
      <img
        {...props}
        src={normalizedSrc}
        loading={loading}
        decoding={decoding}
      />
    )
  }

  return (
    <img
      {...props}
      src={generated.src}
      srcSet={generated.srcSet}
      sizes={sizes || defaultSizes[profile]}
      loading={loading}
      decoding={decoding}
      onError={() => setUseOriginal(true)}
    />
  )
}

export default OptimizedImage
