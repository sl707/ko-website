import React from 'react'
import LinkBlock from './link-block'
import * as styles from './menu-panel.module.css'

const MenuPanel = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <h2 className={styles.title}>바로가기</h2>
      <div className={styles.grid}>
        <LinkBlock blkImage={'/신문단체.jpg'} blkTitle={'고씨종보'} blkLink={'/newspaper/'} />
        <LinkBlock blkImage={'/이사회22.JPG'} blkTitle={'중앙종문회'} blkLink={'/introduction/'} />
        <LinkBlock blkImage={'/왕위전2.jpg'} blkTitle={'항렬표'} blkLink={'/nameorder/'} />
        <LinkBlock blkImage={'/연원.jpg'} blkTitle={'역 사'} blkLink={'/father/'} />
        <LinkBlock blkImage={'/news/130main.jpg'} blkTitle={'임 원'} blkLink={'/centralmembers/'} />
        <LinkBlock blkImage={'/종문회빌딩.jpeg'} blkTitle={'오시는 길'} blkLink={'/contact/'} />
      </div>
    </div>
  </section>
)

export default MenuPanel
