import React from 'react'

import SectionHub from '../components/section-hub'

const items = [
  {
    name: '시조 고을나왕',
    url: '/father/',
    image: '/고을나왕.jpg',
    description: '기원전 2337년 탐라국을 세운 시조 고을나대왕입니다.',
  },
  {
    name: '중시조 고말로',
    url: '/midfather/',
    image: '/고말로.jpg',
    description: '고려에 내조하여 우리나라 고씨의 중시조가 된 말로 공입니다.',
  },
  {
    name: '개국설화',
    url: '/openingstory/',
    image: '/삼성혈.jpeg',
    description: '탐라국 개국에 관한 설화와 그 유래입니다.',
  },
  {
    name: '유래',
    url: '/origin/',
    image: '/유래.jpg',
    description: '제주를 본관으로 하는 고씨 성의 유래입니다.',
  },
  {
    name: '9대 분파조',
    url: '/pajo/',
    image: '/문충공파.jpeg',
    description: '양경공파를 비롯한 아홉 분파조를 소개합니다.',
  },
  {
    name: '탐라국의 연원',
    url: '/yeonwon/',
    image: '/연원.jpg',
    description: '3,739년에 이르는 탐라국 통치의 연원입니다.',
  },
  {
    name: '삼성혈',
    url: '/samseonghyeol/',
    image: '/삼성혈.jpg',
    description: '탐라국 삼신인이 솟아났다고 전하는 성소입니다.',
  },
  {
    name: '왕위전',
    url: '/wangwijeon/',
    image: '/왕위전2.jpg',
    description: '역대 탐라국 왕위의 계승 기록입니다.',
  },
  {
    name: '성시표기',
    url: '/character/',
    image: '/성씨.gif',
    description: '고씨(髙氏) 성자의 올바른 표기에 관한 안내입니다.',
  },
  {
    name: '종훈',
    url: '/jonghun/',
    image: '/종훈.jpg',
    description: '후손이 지켜야 할 종훈(宗訓)입니다.',
  },
  {
    name: '대동항렬표',
    url: '/nameorder/',
    image: '/제18회탐라국.jpg',
    description: '세손별 항렬자를 정리한 대동항렬표입니다.',
  },
]

const HistoryPage = () => (
  <SectionHub
    title="고 씨 역 사"
    subtitle="역사 안내"
    intro="시조 고을나왕부터 대동항렬표까지, 고씨 가문의 역사를 주제별로 모았습니다."
    items={items}
  />
)

export default HistoryPage
