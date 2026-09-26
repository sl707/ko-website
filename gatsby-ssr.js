import React from 'react'

// Decided before first paint so returning visitors never see the parchment.
const introScript = `(function(){try{
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
if(sessionStorage.getItem('ko-intro-seen'))return;
sessionStorage.setItem('ko-intro-seen','1');
document.documentElement.classList.add('intro-on');
}catch(e){}})();`

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const isHome = pathname === '/'

  setHeadComponents([
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
      key="viewport"
    />,
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
    ...(isHome
      ? [
          <link rel="preload" as="image" href="/emblem-seal.webp" key="intro-emblem" />,
          <script key="intro-seal" dangerouslySetInnerHTML={{ __html: introScript }} />,
        ]
      : []),
  ])
}
