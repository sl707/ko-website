import React, { useEffect } from 'react'

import * as styles from './intro-seal.module.css'

export const INTRO_CLASS = 'intro-on'
const LEAVING_CLASS = 'intro-leaving'
const INTRO_DURATION = 5400
const SKIP_FADE = 760

const IntroSeal = () => {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains(INTRO_CLASS)) return undefined

    let finished = false
    const timers = []
    const finish = () => {
      if (finished) return
      finished = true
      root.classList.remove(INTRO_CLASS, LEAVING_CLASS)
      events.forEach(name => window.removeEventListener(name, skip))
    }
    const skip = () => {
      if (finished || root.classList.contains(LEAVING_CLASS)) return
      root.classList.add(LEAVING_CLASS)
      timers.push(window.setTimeout(finish, SKIP_FADE))
    }

    const events = ['pointerdown', 'keydown', 'wheel', 'touchmove']
    events.forEach(name => window.addEventListener(name, skip, { passive: true }))
    timers.push(window.setTimeout(finish, INTRO_DURATION))

    return () => {
      timers.forEach(timer => window.clearTimeout(timer))
      finish()
    }
  }, [])

  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.grain} />
      <div className={styles.seal}>
        <div className={styles.stage}>
          <div className={styles.ink} />
          <img
            className={styles.emblem}
            src="/emblem-seal.webp"
            width="180"
            height="180"
            alt=""
            decoding="sync"
          />
        </div>
        <p className={styles.name}>고씨중앙종문회</p>
      </div>
    </div>
  )
}

export default IntroSeal
