/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './header'
import Footer from './footer'
import './layout.css'
import PageTitle from './page-title'
import { SubHeading } from '../data/typography'
import theme from '../theme'

const MainContent = s.main`
  padding-top: var(--header-height);
  min-height: calc(100vh - 200px);
`

const PageContent = s.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 var(--size-gutter);
`

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
      <MainContent>
        {pageTitle && <PageTitle pageTitle={pageTitle} />}
        {pageSubtitle && <SubHeading>{pageSubtitle}</SubHeading>}
        {pageTitle || pageSubtitle ? (
          <PageContent>{children}</PageContent>
        ) : (
          children
        )}
      </MainContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
