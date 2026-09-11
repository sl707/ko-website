import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import navLinks from '../data/navigation'
import DownTriangle from '../images/down-triangle.svg'
import UpTriangle from '../images/up-triangle.svg'
import theme from '../theme'

const HeaderWrapper = s.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${theme.colors.surface};
  box-shadow: ${theme.shadows.header};
  border-bottom: 1px solid ${theme.colors.borderLight};
`

const HeaderInner = s.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TitleWrapper = s(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    opacity: 0.85;
  }
`

const TitleText = s.span`
  font-family: ${theme.fonts.serif};
  font-size: 1.35rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`

const NavWrapper = s.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const NavSingleWrapper = s.div`
  position: relative;

  &:hover > nav {
    display: flex;
  }
`

const NavLink = s(Link)`
  display: block;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
  padding: 8px 14px;
  border-radius: ${theme.radius.sm};
  transition: background-color ${theme.transitions.fast},
    color ${theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.primary};
  }
`

const NavSingleTitle = s.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.text};
  padding: 8px 14px;
  border-radius: ${theme.radius.sm};
  cursor: pointer;
  transition: background-color ${theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.primary};
  }
`

const SubnavWrapper = s.nav`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.md};
  padding: 8px;
  min-width: 180px;
  flex-direction: column;
  z-index: 110;
`

const SubnavLink = s(Link)`
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
  color: ${theme.colors.text};
  padding: 10px 16px;
  border-radius: ${theme.radius.sm};
  transition: background-color ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.primary};
  }
`

const MenuIcon = s.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: ${theme.radius.sm};

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
  }
`

const HamburgerLine = s.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${theme.colors.primary};
  border-radius: 1px;
  transition: transform ${theme.transitions.fast};
`

const MobileMenu = s.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: ${props => (props.$open ? 'block' : 'none')};
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: ${theme.colors.surface};
    border-bottom: 1px solid ${theme.colors.border};
    box-shadow: ${theme.shadows.md};
    max-height: calc(100vh - var(--header-height));
    overflow-y: auto;
    padding: 12px 0;
  }
`

const MobileNavItem = s.div`
  border-bottom: 1px solid ${theme.colors.borderLight};
`

const MobileNavLink = s(Link)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.text};
  padding: 14px 24px;

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.primary};
  }
`

const MobileNavToggle = s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.text};
  padding: 14px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.backgroundAlt};
  }
`

const MobileSubnav = s.div`
  background-color: ${theme.colors.background};
  padding: 4px 0;
`

const MobileSubnavLink = s(Link)`
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  padding: 10px 24px 10px 40px;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.backgroundAlt};
  }
`

const navbarLinks = () =>
  navLinks.map(link =>
    link.submenu.length === 0 ? (
      <NavSingleWrapper key={link.name}>
        <NavLink to={link.url}>{link.name}</NavLink>
      </NavSingleWrapper>
    ) : (
      <NavSingleWrapper key={link.name}>
        <NavSingleTitle>
          {link.name}
          <img src={DownTriangle} alt="" style={{ margin: 0, width: 10, opacity: 0.5 }} />
        </NavSingleTitle>
        <SubnavWrapper>
          {link.submenu.map(sublink => (
            <SubnavLink key={sublink.url} to={sublink.url}>
              {sublink.name}
            </SubnavLink>
          ))}
        </SubnavWrapper>
      </NavSingleWrapper>
    )
  )

const mobileNavLinks = (selectNav, setSelectNav) =>
  navLinks.map(link => (
    <MobileNavItem key={link.name}>
      {link.submenu.length === 0 ? (
        <MobileNavLink to={link.url}>{link.name}</MobileNavLink>
      ) : (
        <>
          <MobileNavToggle
            onClick={() =>
              setSelectNav(link.name === selectNav ? '' : link.name)
            }
          >
            {link.name}
            <img
              src={selectNav === link.name ? UpTriangle : DownTriangle}
              alt=""
              style={{ margin: 0, width: 12, opacity: 0.5 }}
            />
          </MobileNavToggle>
          {selectNav === link.name && (
            <MobileSubnav>
              {link.submenu.map(sublink => (
                <MobileSubnavLink key={sublink.url} to={sublink.url}>
                  {sublink.name}
                </MobileSubnavLink>
              ))}
            </MobileSubnav>
          )}
        </>
      )}
    </MobileNavItem>
  ))

const Header = ({ siteTitle }) => {
  const [navOn, setNavOn] = useState(false)
  const [selectNav, setSelectNav] = useState('')

  return (
    <HeaderWrapper>
      <HeaderInner>
        <TitleWrapper to="/">
          <StaticImage
            src="../images/고씨마크1.png"
            loading="eager"
            width={36}
            alt="고씨중앙종문회"
          />
          <TitleText>{siteTitle}</TitleText>
        </TitleWrapper>
        <MenuIcon
          onClick={() => setNavOn(!navOn)}
          aria-label="메뉴 열기"
          aria-expanded={navOn}
        >
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </MenuIcon>
        <NavWrapper>{navbarLinks()}</NavWrapper>
      </HeaderInner>
      <MobileMenu $open={navOn}>{mobileNavLinks(selectNav, setSelectNav)}</MobileMenu>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
