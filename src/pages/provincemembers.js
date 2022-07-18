import React from "react"
import s from 'styled-components'

import Layout from "../components/layout"
import { SubHeading, Text, TextSubheading, TextWrapperOne } from "../data/typography"

const PMWrapper = s.div`
  display: flex;
`

const ProvincemembersPage = () => (
  <Layout pageTitle={'중앙종문회'} pageSubtitle={'지방종문회'}>
    <PMWrapper>
      <TextWrapperOne>
        <Text>
          <TextSubheading>(ㄱ)</TextSubheading>
          강릉종문회<br />
          강릉종문회<br />
          강화두운종문회<br />
          강화제흥군<br />
          강화종문회<br />
          경주종문회<br />
          고씨동탄종문회<br />
          고씨총본부회<br />
          고창종문회<br />
          고흥종문회<br />
          곡성종문회<br />
          광산종문회<br />
          광양종문회<br />
          광주.전남종문회<br />
          광주탐라회<br />
          구례종문회<br />
          군산종문회<br />
          금산상렴종문회<br />
          금산종문회<br />
          기계종문회<br />
          기흥종문회<br />
          김제종문회<br />
          <TextSubheading>(ㄴ)</TextSubheading>
          남원종문회<br />
          남해종문회<br />
          <TextSubheading>(ㄷ)</TextSubheading>
          담양종문회<br />
          대구경북종문회<br />
          대전종문회<br />
          대전탐라회<br />
          도문시종문회<br />
          <TextSubheading>(ㅁ)</TextSubheading>
          목포종문회<br />
          무안함평종문회<br />
          문경종문회<br />
        </Text>
      </TextWrapperOne>
      <TextWrapperOne>
        <Text>
          <TextSubheading>(ㅂ)</TextSubheading>
          부산종문회<br />
          부안노적종문회<br />
          부안종문회<br />
          북경종문회<br />
          <TextSubheading>(ㅅ)</TextSubheading>
          상주종문회<br />
          서산.태안종문회<br />
          서울종문회<br />
          속초.양양종문회<br />
          순창종문회<br />
          순천종문회<br />
          신안종문회<br />
          <TextSubheading>(ㅇ)</TextSubheading>
          안양종문회<br />
          양양한상종문회<br />
          양주장흥종문회<br />
          여수종문회<br />
          연기종문회<br />
          영곡공파농서리계<br />
          영덕종문회<br />
          영동종문회<br />
          영암종문회<br />
          영양종문회<br />
          영월종문회<br />
          온수종문회<br />
          용정시종문회<br />
          울산종문회<br />
          원주횡성둔둔종문회<br />
          음성종문회<br />
          의왕종문회<br />
          익산종문회<br />
        </Text>
      </TextWrapperOne>
      <TextWrapperOne>
        <Text>
          <TextSubheading>(ㅈ)</TextSubheading>
          장성종문회<br />
          장흥백 제주종문회<br />
          장흥백경북대구종문회<br />
          장흥백대종회종문회<br />
          장흥종문회<br />
          재경완도종문회<br />
          재경장령공종문회<br />
          전의종문회<br />
          전주종문회<br />
          정선종문회<br />
          정읍종문회<br />
          진안종문회<br />
          진주효열공종문회<br />
          <TextSubheading>(ㅊ)</TextSubheading>
          천안종문회<br />
          철원종문회<br />
          청양종문회<br />
          청주감찰공계<br />
          청주상당군파회<br />
          청주지동종문회<br />
          춘천종문회<br />
          <TextSubheading>(ㅌ)</TextSubheading>
          통영장흥백종문회<br />
          통영종문회<br />
          <TextSubheading>(ㅍ)</TextSubheading>
          파주종문회<br />
          평택종문회<br />
          <TextSubheading>(ㅎ)</TextSubheading>
          홍성종문회<br />
          화룡시종문회<br />
          화순종문회<br />
          효충사유지회<br />
          훈춘시종문회<br />
        </Text>
      </TextWrapperOne>
    </PMWrapper>
  </Layout>
)

export default ProvincemembersPage
