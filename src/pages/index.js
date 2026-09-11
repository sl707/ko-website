import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import MainPanel from '../components/main-panel'
import StatsPanel from '../components/stats-panel'
import NewsPanel from '../components/news-panel'
import MenuPanel from '../components/menu-panel'
import InfoPanel from '../components/info-panel'

const IndexPage = () => (
  <Layout>
    <Seo title="집" />
    <MainPanel />
    <StatsPanel />
    <NewsPanel />
    <InfoPanel />
    <MenuPanel />
  </Layout>
)

export default IndexPage
