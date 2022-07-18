import React from 'react'
import s from 'styled-components'

import Post from '../components/post'
import Layout from '../components/layout'
import { Text, TextSubheading } from '../data/typography'
const charText = (
  <Text>
    ※ 한문 髙(성 고)로 주민등록증을 발급 하시는경우 모든 공공문서 (예:호적등본,초본,주민등록등본,초본 등등) 발급시 髙(성 고)로 수정되어 발급됨을 알려드립니다.<br /><br />

    1973년 고씨세록 편찬위원회 총회에서 우리 성씨의 옛날 족보나 고문헌의 기록등을 검토하여 우리 성씨 표기를 髙(성 고)자로 표기 결의하였고, 고씨중앙종문회 및 고씨종문회총본부에서는 행정자치부에 건의하여 구청이나 동사무소로 하여금 1999년도부터 새로 발급되는 주민등록증의 고씨의 성자(姓字)는 髙(성 고) 를 사용할 수 있도록 조치하였습니다.<br />

    성씨의 髙는(성 고)로 부르며 한자 획수는 11획이고, 형용사(높을 고)로서 사용되는 高는 한자 획수가 10획으로 고씨 성씨 이외의 의미로 사용 됩니다. 일반적으로 컴퓨터나 명함 인쇄소가  髙(성 고) 활자체가 없어 표기를 못하고 있으므로 특별히 준비한 인쇄소에 부탁하여 명함을 인쇄하시기 바랍니다.<br /><br />

    <TextSubheading>아래한글에서 성고(髙)자 사용방법</TextSubheading>

    1.워드작성과정에 한컴바탕 글체를 선택하여 워드화면상에 맨위 메뉴얼 입력란에 문자표를 선택한다.<br />
    2.Ctrl+F10-{'>'}유니 코드 문자표-{'>'}코드기호-{'>'} 9AD9 를 엔터하면 됩니다.<br />

    우리 성씨를 영문으로 표기할 때도 여러 가지 표기를 사용하여 통일이 되지 못한 실정으로 잘못하면 동일인이 아닌 타인으로 취급되는 경우도 있습니다.<br />

    현재 고씨 종친들이 사용하고 있는 우리 성씨 髙(성 고)의 영문표기는 아래와 같이 4가지로 분류, 사용되고 있습니다.<br /><br />

    ① KOH ② KO ③ GO ④ GOH
</Text>
)
const CharacterPage = () => (
  <Layout pageTitle={'역사'} pageSubtitle={'성씨표기'}>
    <Post imageUrl={'/성씨.gif'} text={charText} />
  </Layout>
)

export default CharacterPage
