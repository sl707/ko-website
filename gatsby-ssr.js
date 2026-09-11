import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" key="preconnect-google" />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      key="preconnect-gstatic"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;600;700&display=swap"
      rel="stylesheet"
      key="google-fonts"
    />,
  ])
}
