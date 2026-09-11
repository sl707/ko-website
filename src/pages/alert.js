import React from 'react'

import Layout from '../components/layout'
import AlertTable from '../components/alert-table'

const AlertPage = () => (
  <Layout pageTitle={'공지사항'}>
    <AlertTable page />
  </Layout>
)

export default AlertPage
