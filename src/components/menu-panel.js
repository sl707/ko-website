import React from 'react'
import LinkBlock from './link-block'
import Reveal from './reveal'
import SectionHeader from './section-header'
import * as styles from './menu-panel.module.css'

const shortcuts = [
  { image: '/신문단체.jpg', title: '고씨종보', link: '/newspaper/' },
  { image: '/이사회22.JPG', title: '중앙종문회', link: '/central/' },
  { image: '/왕위전2.jpg', title: '항렬표', link: '/nameorder/' },
  { image: '/연원.jpg', title: '역 사', link: '/history/' },
  { image: '/news/130main.jpg', title: '임 원', link: '/members/' },
  { image: '/종문회빌딩.jpeg', title: '오시는 길', link: '/contact/' },
]

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
        {shortcuts.map((item, index) => (
          <Reveal key={item.link} delay={(index % 3) * 80}>
            <LinkBlock blkImage={item.image} blkTitle={item.title} blkLink={item.link} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default MenuPanel
