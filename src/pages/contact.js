import React from 'react'

import Layout from '../components/layout'
import { Text, SubHeading, SmallerSubHeading, TextSubheading } from '../data/typography'
import Post from '../components/post'
import * as styles from './contact.module.css'

const subwayText = (
  <Text>
    <TextSubheading>중곡동입구삼거리</TextSubheading>
    5호선: 군자역 4번 출구에서 500M 직진<br />
    7호선: 군자역 4번 출구에서 500M 직진<br />
  </Text>
)

const busText = (
  <Text>
    <TextSubheading>중곡동입구삼거리</TextSubheading>
    간선버스: 130, 303, 370, N30(심야)<br />
    지선버스: 2012, 2221, 2311<br />
    광역버스: 9403<br />
    직행버스: 9301<br />
    일반버스 (경기도): 119 <br /><br />
    <TextSubheading>찬양교회</TextSubheading>
    마을버스: 광진02<br />
  </Text>
)

const ContactPage = () => (
  <Layout pageTitle={'오시는 길'}>
    <SubHeading className={styles.section}>연 락 처</SubHeading>
    <div className={styles.textWrapper}>
      <Text>
        이메일: artspeech@hanmail.net<br />
        TEL: 02-755-0919 <br />
        FAX: 02-790-3360<br />
      </Text>
    </div>
    <SubHeading className={styles.sectionTight}>오시는 길</SubHeading>
    <div className={`${styles.textWrapper} ${styles.mapWrapper}`}>
      <a className={styles.mapLink} rel="noreferrer noopener" href="https://naver.me/xAtyv2oy">
        네이버 지도에서 보기 →
      </a>
    </div>
    <Post imageUrl={'/종문회빌딩.jpg'} />
    <SmallerSubHeading>지하철</SmallerSubHeading>
    <Post imageUrl={'/지도1.png'} text={subwayText} />
    <SmallerSubHeading>버 스</SmallerSubHeading>
    <Post imageUrl={'/지도2.png'} text={busText} />
  </Layout>
)

export default ContactPage
