import React from 'react'
import s from 'styled-components'
import InfoBlock from './info-block'

const InfoPanelWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InfoPanelTitle = s.div`
  display: flex;
  font-size: 30px;
  font-weight: 700;
  padding: 30px;
`

const InfoPanelDivider = s.hr`
  display: flex;
  border-top: 3px solid #bbb;
  width: 5%;
`

const infoList = [
  {
    image: '연원.jpg',
    text: '고씨의 시조 고을나대왕은 단군기원보다 4년 앞선 기원전 2337년 탐라국을 세우고 제45위 왕통을 계승하며 3,275년을 통치하였다.\n' +
    '고려 태조 이후에는 제1대 고말로 성주부터 제17위의 고씨 성주들이 464년을 통치하였으니 고씨 가문에서 3,739년간 탐라국을 통치 한 것이다.\n' +
    '오늘날 후손들은 「탐라원」을 조성하여 「탐라국 종묘대제」를 봉향하고 있다.',
    order: 1
  },
  {
    image: '장흥연수원기증.jpg',
    text: '고씨중앙종문회의 설립목적은 선조의 유덕을 받들고 종친 상호간의 친목 단합으로 국가 발전에 기여하고 고씨 가문의 앞날을 빛나게 하는데 있다.\n' +
    '이와 같이 설립 목적을 달성하기 위하여\n' +
    '     1. 선조의 사적 보존 및 고증에 관한 사업\n' +
    '     2. 족보 문집 행장(行狀) 등에 관한 사업\n' +
    '     3. 종보 및 도서 발간 사업\n' +
    '     4. 회관운영과 후손 육영에 관한 사업\n' +
    '등을 하고 있다.',
    order: 3
  },
  {
    image: '정기총회.jpeg',
    text: '창립과정\n' +
    '1956. 7. 21 서울 덕수궁에서 「재경고씨회」를 창립하였고 1957. 5. 12 서울 장춘단공원에서 제2회 정기총회를 개최하는 등 1971년 서울 덕수궁에서 제13회까지 정기총회를 개최하였다.\n' +
    '1973. 12. 15 서울 한국회관(북창동)에서 회명을 고씨중앙종문회로 개칭하는 창립총회를 개최하였고 계속 정기총회를 개최하였으며 2023. 3. 23 대전 뿌리공원에서 제50회 정기총회를 개최하며 오늘에 이르고 있다. 초대회장은 고재욱 제24대 현 회장은 고재갑 박사이다.',
    order: 2
  },
  {
    image: 'news/139-1.jpg',
    text: '고씨중앙종문회는 「고씨종보」를 발간하고 있으며 재단법인 고씨중앙종문장학회를 설립 운영하고 서울특별시 광진구 천호대로 617에 7층 회관을 소유하고 있다. 가칭「고씨중앙연수원」을 건설하기 위하여 토지를 기증받아 추진 중이며 중국 등 해외 종문회를 조직하여 전 세계 60만 고씨 가족들의 친목 단합에 힘쓰고 있다.',
    order: 4
  }
].sort((a ,b) => (a.order > b.order) ? 1 : -1)

const InfoPanel = () => (
  <InfoPanelWrapper>
    <InfoPanelTitle>고씨중앙종문회란?</InfoPanelTitle>
    {infoList.map(i => (
      <>
        {i.order !== 1 && <InfoPanelDivider />}
        <InfoBlock image={i.image} text={i.text} order={i.order}/>
      </>
    ))}
  </InfoPanelWrapper>
)

export default InfoPanel
