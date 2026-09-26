import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './404.module.css'

const NotFoundPage = () => (
  <Layout>
    <Seo title="페이지를 찾을 수 없습니다" />
    <div className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
      <p className={styles.message}>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link className={styles.homeLink} to="/">홈으로 돌아가기</Link>
    </div>
  </Layout>
)

export default NotFoundPage
