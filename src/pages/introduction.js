import React from 'react'
import s from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import { Text, SubHeading, BoldText } from '../data/typography'

const IntroWrapper = s.div`
  margin: 25px 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

// const IntroTextWrapper = s.div`
//   padding: 20px;
//   text-align: justify;
//   text-justify: inter-word;
// `

const IntroductionPage = () => (
  <Layout pageTitle={'중앙종문회'} pageSubtitle={'회장 인사말'}>
    <IntroWrapper>
      <StaticImage
        src="../images/고재갑회장.jpg"
        style={{
          position: 'relative',
          margin: '20px',
          minWidth: '250px'
        }}
      />
      <Text>
        존경하고 사랑하는 전 세계의 60만 고씨 가족 여러분!<br />
        우리 고씨들은 고을나 대왕의 후손들입니다.<br />
        시조 고을나 대왕은 BC2337년 탐라왕국을 건설하여 제45대 자견왕까지 3275년간의 왕조시대를 거처 초대 고말로 성주로부터 제17대 고봉례 성주까지 464년간 성주시대를 이어오면서 3739년의 기나긴 세월 탐라 국가를 통치하여 오늘에 이르렀습니다.<br />
        전 세계 어느 나라에서도 시조에서부터 현재에 이르기까지 4천 여년의 유구한 역사와 빛나는 전통을 면면히 전승 발전시켜온 놀라운 역사를 가진 성씨는 우리 고씨가 유일하다고 할 것입니다.<br />
        이와 같이 우리 고씨는 한 가족이요 한 핏줄입니다.<br />
        앞에서 끌어주고 뒤에서 밀어주며 대동단결하고 고씨 집안의 앞날을 빛내야 하겠습니다.<br />
        고씨중앙종문회에서는 선조들의 가르치심과 찬란한 업적들을 이어받아 계승 발전시키는데 혼신의 노력을 다 할것입니다.<br />
        중앙종문회가 고씨 가문의 중심조직으로서 역할과 사명을 다 할 수 있도록 적극적인 참여와 지도 편달을 바랍니다.<br />
        고씨 일가 여러분들의 가정에 행복이 가득하시기를 기원합니다.<br />
        감사합니다.<br />
        <br />
        <BoldText>
          고씨중앙종문회장 고재갑
        </BoldText>
      </Text>
    </IntroWrapper>
  </Layout>
)

export default IntroductionPage
