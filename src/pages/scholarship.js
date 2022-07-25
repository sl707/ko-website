import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'

const ScholarshipLink = s.a`
  color: purple;
`

const ScholarshipPage = () => (
  <Layout pageTitle={'중 앙 종 문 회'} pageSubtitle={'장학회 / 장학금'}>
    <TextWrapperOne>
      <Text>
      재단법인 고씨중앙종문장학회는 1994년 1월 5일 발기인 총회를 거쳐 동년 6월 7일 제1-480호(서울특별시교육감)재단법인으로 설립 등기하였으며 고씨중앙종문회 회장을 이사장으로 이사와 감사를 선임하여 이사회에서 관리 운영하고 있다.<br /><br />

      장학기금으로 고제철 중앙회장이 4억 원을 출현하는 등 전국적으로 300여명의 종친들이 장학기금을 출현하여 현재 15억 원의 기금을

      조성하였다.<br /><br />

      장학금 지급 현황은 1995년 제1차로 대학생 7명과 고등학생 13명에게 16,800,000만원의 장학금을 지급한 것을 시작으로 2020년 3월 현재 대학생 406명과 고등학생 413명 등 821명의 고씨고등학생 및 대학생들에게 총계 금액 9억4천5백사십만 원의 장학금을 지급하였다.<br /><br />
      <ScholarshipLink href={'/고씨장학금.xlsx'} download>2022 장학금 지급 현황 다운로드</ScholarshipLink><br />
      {'<'}참고{'>'}<br />
      2022년부터 회비/장학금/찬조금은 통합하여 발표합니다 (고씨종보 제135호 2022년 6월 10일자 참조)
      </Text>
    </TextWrapperOne>
  </Layout>
)

export default ScholarshipPage
