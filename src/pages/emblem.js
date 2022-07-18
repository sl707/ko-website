import React from "react"
import s from 'styled-components'

import Post from '../components/post'
import Layout from "../components/layout"
import { Text } from "../data/typography"
const emblemText = (
  <Text>
    탐라국왕 고을라 시조신인이 용출 도읍하신 삼성혈지의 표상이다.<br />

    품자형은 고위 상제군장이요 삼태극지 천.지.인 삼재를 의미한다.<br />

    대우주 천원하여 광명화동의 근원임을 뜻한다.<br />

    삼신산의 삼서운은 일 월 성 삼광정기의 길상이요 산천의 기가 음양 취합하여 천지청운을 뜻한다.<br />

    운기 즉, 구름을 수놓은 깃발은 하늘높이 치솟는 기상으로서 유구한 고문혈족이 무궁 육성할 기운을 상징한다.<br />

    채색은 오원색이 조화된 청적황백(오행)으로서, 중앙의 주황 빛은 광명을<br />

    바탕의 농녹빛은 창생을, 기주는 백호를, 그리고 종문회 명칭 글자와 테두리의 황금색은 영화를 나타낸다.<br />
  </Text>
)
const EmblemPage = () => (
  <Layout pageTitle={'역사'} pageSubtitle={'종기 해설'}>
    <Post imageUrl={'/종기.png'} text={emblemText} />
  </Layout>
)

export default EmblemPage
