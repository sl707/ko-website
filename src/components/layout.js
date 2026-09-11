/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import PageTitle from './page-title'
import { SubHeading } from '../data/typography'
import * as styles from './layout.module.css'

const Layout = ({ children, pageTitle, pageSubtitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || '고씨중앙종문회'} />
      <main className={styles.mainContent}>
        {pageTitle && <PageTitle pageTitle={pageTitle} />}
        {pageSubtitle && <SubHeading>{pageSubtitle}</SubHeading>}
        {pageTitle || pageSubtitle ? (
          <div className={styles.pageContent}>{children}</div>
        ) : (
          children
        )}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
