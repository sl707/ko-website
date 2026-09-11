import React from 'react'
import { Link } from 'gatsby'

import navLinks from '../data/navigation'
import * as styles from './breadcrumbs.module.css'

const normalizePath = pathname =>
  pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`

const getItems = (pathname, pageTitle, pageSubtitle) => {
  const path = normalizePath(pathname)
  const currentLabel = pageSubtitle || pageTitle

  if (/^\/post\/\d+\/$/.test(path)) {
    return [
      { label: '홈', to: '/' },
      { label: '소식 / 자료실', to: '/posts/' },
      { label: currentLabel },
    ]
  }

  if (/^\/newspaper\/\d+\/$/.test(path)) {
    return [
      { label: '홈', to: '/' },
      { label: '종보', to: '/newspaper/' },
      { label: currentLabel },
    ]
  }

  const parent = navLinks.find(link =>
    link.url === path || link.submenu.some(item => item.url === path)
  )

  if (parent) {
    // Section landing page: the tab itself is the destination.
    if (parent.url === path) {
      return [{ label: '홈', to: '/' }, { label: parent.name }]
    }

    const child = parent.submenu.find(item => item.url === path)
    if (child) {
      return [
        { label: '홈', to: '/' },
        { label: parent.name, to: parent.url },
        { label: child.name },
      ]
    }

    return [{ label: '홈', to: '/' }, { label: parent.name }]
  }

  return [{ label: '홈', to: '/' }, { label: currentLabel }]
}

const Breadcrumbs = ({ pathname, pageTitle, pageSubtitle }) => {
  const items = getItems(pathname, pageTitle, pageSubtitle)

  return (
    <nav className={styles.wrapper} aria-label="현재 위치">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1
          return (
            <li className={styles.item} key={`${item.label}-${index}`}>
              {item.to && !isCurrent ? (
                <Link className={styles.link} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <span className={isCurrent ? styles.current : styles.parent} aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
