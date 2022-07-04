import * as React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navLinks } from "../data/navigation"

const HeaderWrapper = s.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
`
const TitleWrapper = s(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
`

const TitleText = s.div`
  text-decoration: none;
  align-items: center;
  display: flex;
`
const NavWrapper = s.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`

const NavLink = s(Link)`
  text-decoration: none;
`

const SubnavWrapper = s.nav`
  position: fixed; 
  display: none;
`

const SubnavLink = s(Link)`
  display: table-row;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavSingleWrapper = s.div`
  overflow: hidden;
  &:hover ${SubnavWrapper} {
    display: table
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <NavWrapper>
      <TitleWrapper to="/">
        <StaticImage
          src="../images/고씨마크.png"
          to="/"
          loading="eager"
          width={40}
        />
        <TitleText> {siteTitle} </TitleText>
      </TitleWrapper>
      {
        navLinks.map(link => (
          <NavSingleWrapper>
            <NavLink
              to={link.url}
            >
              {link.name}
            </NavLink>
            <SubnavWrapper>
              {
                link.submenu.map(sublink => (
                  <SubnavLink
                    to={sublink.url}
                  >
                    {sublink.name}
                  </SubnavLink>
                ))
              }
            </SubnavWrapper>
          </NavSingleWrapper>
        ))
      }
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
