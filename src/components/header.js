import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import navLinks from '../data/navigation'

const HeaderWrapper = s.header`
  margin: 0 auto;
  padding: 10px;
  padding-top: 15px;
  display: grid;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background-color: white;
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
  font-size: 28px;
  padding-left: 5px;
`
const NavWrapper = s.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  padding-bottom: 5px;
`

const NavSubWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const NavSubWrapperSmall = s.div`
  top: 0%
  z-index: 20;
  position: relative;
  float: right;
  background-color: #FEFEE1;
  overflow: visible;
  display: grid;
  border: 2px solid #f8ba32;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`

const NavLink = s(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: normal;
`

const SubnavWrapper = s.nav`
  background-color: white;
  position: absolute; 
  display: none;
  z-index: 30;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    top: 80%;
  }
`

const SubnavLink = s(Link)`
  display: table-row;
  text-decoration: none;
  padding: 7px;
  &:hover {
    text-decoration: underline;
  }
`

const NavSingleWrapper = s.div`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    &:hover ${SubnavWrapper} {
      display: table
    }
    display: flex;
    flex-direction: column;
  }
`

const MenuIcon = s.div`
  position: relative;
  float: right;
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

const NavSingleTitle = s.div`
  font-size: 20px;
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 1000px) {
    border: 1px solid #f8ba32;
  }
`

const HamburgerLine = s.div`
  width: 25px;
  height: 2px;
  background-color: black;
  margin: 3px 0;
`

const navbarLinks = (small, selectNav, setSelectNav) => navLinks.map(link => (
  <NavSingleWrapper>
    {
      (!small || (small && link.submenu.length === 0))
        ? <NavSingleTitle><NavLink to={link.url}>{link.name}</NavLink></NavSingleTitle>
        : <NavSingleTitle onClick={() =>
          ((link.name === selectNav)
            ? setSelectNav('')
            : setSelectNav(link.name))}
      >{link.name}</NavSingleTitle>
    }
    <SubnavWrapper>
      {
        (!small || (selectNav === link.name)) &&
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

const Header = ({ siteTitle }) => {
  const [navOn, setNavOn] = useState(false)
  const [selectNav, setSelectNav] = useState('')
  return (
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
        <MenuIcon onClick={() => setNavOn(!navOn)}>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
          <HamburgerLine></HamburgerLine>
        </MenuIcon>
        <NavSubWrapper>
          {navbarLinks(false)}
        </NavSubWrapper>
      </NavWrapper>
      {navOn && <NavSubWrapperSmall>{navbarLinks(true, selectNav, setSelectNav)}</NavSubWrapperSmall>}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
