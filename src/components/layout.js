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
import { StaticImage } from 'gatsby-plugin-image'
import PageTitle from './page-title'
import { SubHeading } from '../data/typography'

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
      {/* <div
        style={{
          margin: '0 auto',
          maxWidth: 'var(--size-content)',
          padding: 'var(--size-gutter)'
        }}
      > */}
      {pageTitle && <PageTitle pageTitle={pageTitle} />}
      {pageSubtitle && <SubHeading>{pageSubtitle}</SubHeading>}
      <main>{children}</main>
        {/* <footer
          style={{
            marginTop: 'var(--space-5)',
            fontSize: 'var(--font-sm)'
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      {/* </div> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
