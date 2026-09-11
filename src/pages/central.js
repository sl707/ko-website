import React from 'react'

import SectionHub from '../components/section-hub'

const items = [
  {
    name: '회장 인사',
    url: '/introduction/',
    image: '/회장추임.jpeg',
    description: '제25대 회장 고재갑 박사의 인사 말씀입니다.',
  },
  {
    name: '발자취',
    url: '/baljachwi/',
    image: '/이사회22.JPG',
    description: '1956년 재경고씨회 창립부터 오늘까지의 발자취입니다.',
  },
  {
    name: '회칙',
    url: '/regulations/',
    image: '/정기총회.jpeg',
    description: '고씨중앙종문회의 회칙과 운영 규정입니다.',
  },
  {
    name: '종기해설',
    url: '/emblem/',
    image: '/고씨마크.png',
    description: '고씨 종기(宗旗)에 담긴 뜻을 풀이합니다.',
  },
  {
    name: '장학회 / 장학금',
    url: '/scholarship/',
    image: '/장학임원.jpeg',
    description: '재단법인 고씨중앙종문장학회의 활동과 장학금 지급 현황입니다.',
  },
]

const CentralPage = () => (
  <SectionHub
    title="중 앙 종 문 회"
    subtitle="중앙종문회 안내"
    intro="고씨중앙종문회의 연혁과 운영, 그리고 장학 사업을 한곳에서 살펴보실 수 있습니다."
    items={items}
  />
)

export default CentralPage
