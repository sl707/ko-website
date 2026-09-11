import React from 'react'
import LinkBlock from './link-block'
import SectionHeader from './section-header'
import * as styles from './menu-panel.module.css'

const MenuPanel = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <SectionHeader
        label="바로가기"
        title="바로가기"
        subtitle="종문회의 주요 페이지를 빠르게 찾아보세요"
        variant="light"
      />
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
