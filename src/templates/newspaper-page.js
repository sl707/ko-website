import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './newspaper-page.module.css'

const ZOOM_LEVELS = [1, 1.35, 1.75, 2.25]

const NewspaperPage = ({ pageContext: { paper, previousPaper, nextPaper } }) => {
  const [page, setPage] = useState(1)
  const [zoomIndex, setZoomIndex] = useState(0)
  const [useOriginal, setUseOriginal] = useState(false)
  const viewerRef = useRef(null)
  const viewportRef = useRef(null)
  const touchStartRef = useRef(null)
  const prefetchedRef = useRef(new Set())

  const pageCount = paper.newsFirstOnly ? 1 : paper.newsNumPages || 8
  const imageType = paper.newsImageType ?? 'jpg'
  const zoom = ZOOM_LEVELS[zoomIndex]

  const originalUrl = pageNumber =>
    `/news/${paper.newsNumber}-${pageNumber}.${imageType}`

  const optimizedUrl = pageNumber =>
    `/generated/news/${paper.newsNumber}-${pageNumber}.webp`

  // Reading width is enough at 100%; zooming swaps in the full-resolution scan.
  const showOriginal = useOriginal || zoom > 1

  const changePage = useCallback(
    nextPage => {
      setPage(current => {
        const target = Math.min(pageCount, Math.max(1, nextPage))
        return target === current ? current : target
      })
      setZoomIndex(0)
    },
    [pageCount]
  )

  useEffect(() => {
    setUseOriginal(false)
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ top: 0, left: 0 })
    }
  }, [page])

  const prefetchPage = useCallback(
    pageNumber => {
      if (
        pageNumber < 1 ||
        pageNumber > pageCount ||
        prefetchedRef.current.has(pageNumber)
      ) {
        return
      }

      prefetchedRef.current.add(pageNumber)
      const image = new Image()
      image.src = optimizedUrl(pageNumber)
    },
    [pageCount, paper.newsNumber]
  )

  const handlePageImageLoad = useCallback(() => {
    prefetchPage(page + 1)
    prefetchPage(page - 1)

    const remaining = Array.from({ length: pageCount }, (_, i) => i + 1).filter(
      pageNumber => !prefetchedRef.current.has(pageNumber)
    )

    const scheduleIdle =
      typeof window !== 'undefined' && window.requestIdleCallback
        ? window.requestIdleCallback
        : callback => window.setTimeout(callback, 300)

    const prefetchNext = index => {
      if (index >= remaining.length) return
      scheduleIdle(() => {
        prefetchPage(remaining[index])
        prefetchNext(index + 1)
      })
    }

    prefetchNext(0)
  }, [page, pageCount, prefetchPage])

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
  }, [changePage, page])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (viewerRef.current?.requestFullscreen) {
      viewerRef.current.requestFullscreen()
    }
  }

  const handleTouchStart = event => {
    if (zoom !== 1) return
    const touch = event.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = event => {
    if (zoom !== 1 || !touchStartRef.current) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y
    touchStartRef.current = null

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return
    changePage(deltaX < 0 ? page + 1 : page - 1)
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

        <div
          className={`${styles.viewport} ${zoom === 1 ? styles.swipeViewport : ''}`}
          ref={viewportRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartRef.current = null
          }}
        >
          <div className={styles.canvas} style={{ width: `${zoom * 100}%` }}>
            <img
              key={`${page}-${showOriginal ? 'original' : 'optimized'}`}
              className={styles.image}
              src={showOriginal ? originalUrl(page) : optimizedUrl(page)}
              alt={`고씨종보 ${paper.newsNumber}호 ${page}면`}
              loading="eager"
              decoding="async"
              onLoad={handlePageImageLoad}
              onError={() => setUseOriginal(true)}
              onClick={() => setZoomIndex(zoomIndex === 0 ? 2 : 0)}
            />
          </div>
        </div>

        <p className={styles.hint}>
          이미지를 누르면 확대됩니다. 좌우로 밀거나 ← → 키로 면을 넘길 수 있습니다.
        </p>
      </section>

      <nav className={styles.issueNav} aria-label="다른 호 보기">
        {previousPaper ? (
          <Link
            className={styles.issueLink}
            to={`/newspaper/${previousPaper.newsNumber}/`}
            rel="prev"
          >
            <span className={styles.issueLabel}>이전 호</span>
            <span className={styles.issueNumber}>제{previousPaper.newsNumber}호</span>
          </Link>
        ) : (
          <span className={styles.issueLinkEmpty} />
        )}

        <Link className={styles.issueListLink} to="/newspaper/">
          전체 목록
        </Link>

        {nextPaper ? (
          <Link
            className={`${styles.issueLink} ${styles.issueLinkNext}`}
            to={`/newspaper/${nextPaper.newsNumber}/`}
            rel="next"
          >
            <span className={styles.issueLabel}>다음 호</span>
            <span className={styles.issueNumber}>제{nextPaper.newsNumber}호</span>
          </Link>
        ) : (
          <span className={styles.issueLinkEmpty} />
        )}
      </nav>
    </Layout>
  )
}

export default NewspaperPage
