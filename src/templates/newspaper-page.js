import React, { useEffect, useRef, useState } from 'react'

import Layout from '../components/layout'
import * as styles from './newspaper-page.module.css'

const ZOOM_LEVELS = [1, 1.35, 1.75, 2.25]

const NewspaperPage = ({ pageContext: { paper } }) => {
  const [page, setPage] = useState(1)
  const [zoomIndex, setZoomIndex] = useState(0)
  const viewerRef = useRef(null)
  const viewportRef = useRef(null)
  const pageCount = paper.newsFirstOnly ? 1 : (paper.newsNumPages || 8)
  const imageType = paper.newsImageType ?? 'jpg'
  const imageUrl = `/news/${paper.newsNumber}-${page}.${imageType}`
  const zoom = ZOOM_LEVELS[zoomIndex]

  const changePage = nextPage => {
    setPage(Math.min(pageCount, Math.max(1, nextPage)))
    setZoomIndex(0)
  }

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ top: 0, left: 0 })
    }
  }, [page])

  const handlePageImageLoad = () => {
    ;[page - 1, page + 1]
      .filter(nextPage => nextPage >= 1 && nextPage <= pageCount)
      .forEach(nextPage => {
        const image = new Image()
        image.src = `/news/${paper.newsNumber}-${nextPage}.${imageType}`
      })
  }

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'ArrowLeft') changePage(page - 1)
      if (event.key === 'ArrowRight') changePage(page + 1)
      if (event.key === '+' || event.key === '=') {
        setZoomIndex(index => Math.min(ZOOM_LEVELS.length - 1, index + 1))
      }
      if (event.key === '-') {
        setZoomIndex(index => Math.max(0, index - 1))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [page])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (viewerRef.current?.requestFullscreen) {
      viewerRef.current.requestFullscreen()
    }
  }

  return (
    <Layout pageTitle="종보" pageSubtitle={`${paper.newsNumber}호`}>
      <section className={styles.reader} ref={viewerRef}>
        <div className={styles.toolbar}>
          <div className={styles.pageControls}>
            <button
              type="button"
              className={styles.controlButton}
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              aria-label="이전 면"
            >
              ‹ <span>이전</span>
            </button>
            <label className={styles.pagePicker}>
              <span className={styles.srOnly}>면 선택</span>
              <select value={page} onChange={event => changePage(Number(event.target.value))}>
                {Array.from({ length: pageCount }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}면
                  </option>
                ))}
              </select>
              <span>/ {pageCount}면</span>
            </label>
            <button
              type="button"
              className={styles.controlButton}
              onClick={() => changePage(page + 1)}
              disabled={page === pageCount}
              aria-label="다음 면"
            >
              <span>다음</span> ›
            </button>
          </div>
          <div className={styles.zoomControls}>
            <button
              type="button"
              className={styles.iconButton}
              onClick={() => setZoomIndex(index => Math.max(0, index - 1))}
              disabled={zoomIndex === 0}
              aria-label="축소"
            >
              −
            </button>
            <span className={styles.zoomValue}>{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              className={styles.iconButton}
              onClick={() =>
                setZoomIndex(index => Math.min(ZOOM_LEVELS.length - 1, index + 1))
              }
              disabled={zoomIndex === ZOOM_LEVELS.length - 1}
              aria-label="확대"
            >
              +
            </button>
            <button type="button" className={styles.fullscreenButton} onClick={toggleFullscreen}>
              전체 화면
            </button>
          </div>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.canvas} style={{ width: `${zoom * 100}%` }}>
            <img
              key={imageUrl}
              className={styles.image}
              src={imageUrl}
              alt={`고씨종보 ${paper.newsNumber}호 ${page}면`}
              loading="eager"
              decoding="async"
              onLoad={handlePageImageLoad}
              onClick={() => setZoomIndex(zoomIndex === 0 ? 2 : 0)}
            />
          </div>
        </div>

        <p className={styles.hint}>
          이미지를 누르면 확대됩니다. 키보드의 ← → 키로 면을 넘길 수 있습니다.
        </p>
      </section>
    </Layout>
  )
}

export default NewspaperPage
