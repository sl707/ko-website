import React from "react"
import s from 'styled-components'

import Post from '../components/post'
import Layout from "../components/layout"
import { Text, TextSubheading } from "../data/typography"

const wangText = (
  <Text>
    왕위전(王位殿) 은 탐라국을 개국하신 고을나왕(髙乙那王) 으로부터 3,275년간을 통치해 온 역대 45위의 왕의 위패(位牌)를 모신 사당이다.
  </Text>
)

const WangwijeonPage = () => (
  <Layout pageTitle={'역 사'} pageSubtitle={'왕위전'}>
    <Post imageUrl={'/왕위전2.jpg'} text={wangText} />
  </Layout>

)

export default WangwijeonPage
