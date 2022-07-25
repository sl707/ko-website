import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'
import AlertTable from '../components/alert-table'

const AlertWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px
`

const AlertPage = () => (
  <Layout pageTitle={'공지사항'}>
    {/* <AlertWrapper>
      <AlertTable page={true} />
    </AlertWrapper> */}
    <div style={{ width: '100%', textAlign: 'center' }}>업데이트 중...</div>
  </Layout>
)

export default AlertPage
