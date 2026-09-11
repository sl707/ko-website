import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import navLinks from '../data/navigation'
import DownTriangle from '../images/down-triangle.svg'
import UpTriangle from '../images/up-triangle.svg'
import * as styles from './header.module.css'

const navbarLinks = () =>
  navLinks.map(link =>
    link.submenu.length === 0 ? (
      <div className={styles.navItem} key={link.name}>
        <Link className={styles.navLink} to={link.url}>{link.name}</Link>
      </div>
    ) : (
      <div className={styles.navItem} key={link.name}>
        <div className={styles.navTitle}>
          {link.name}
          <img src={DownTriangle} alt="" className={styles.chevron} />
        </div>
        <nav className={styles.subnav}>
          {link.submenu.map(sublink => (
            <Link key={sublink.url} className={styles.subnavLink} to={sublink.url}>
              {sublink.name}
            </Link>
          ))}
        </nav>
      </div>
    )
  )

const mobileNavLinks = (selectNav, setSelectNav) =>
  navLinks.map(link => (
    <div className={styles.mobileNavItem} key={link.name}>
      {link.submenu.length === 0 ? (
        <Link className={styles.mobileNavLink} to={link.url}>{link.name}</Link>
      ) : (
        <>
          <div
            className={styles.mobileNavToggle}
            onClick={() =>
              setSelectNav(link.name === selectNav ? '' : link.name)
            }
          >
            {link.name}
            <img
              src={selectNav === link.name ? UpTriangle : DownTriangle}
              alt=""
              className={styles.chevronMobile}
            />
          </div>
          {selectNav === link.name && (
            <div className={styles.mobileSubnav}>
              {link.submenu.map(sublink => (
                <Link key={sublink.url} className={styles.mobileSubnavLink} to={sublink.url}>
                  {sublink.name}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  ))

const Header = ({ siteTitle }) => {
  const [navOn, setNavOn] = useState(false)
  const [selectNav, setSelectNav] = useState('')

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.titleLink} to="/">
          <StaticImage
            src="../images/고씨마크1.png"
            loading="eager"
            width={36}
            alt="고씨중앙종문회"
          />
          <span className={styles.titleText}>{siteTitle}</span>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setNavOn(!navOn)}
          aria-label={navOn ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={navOn}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
        <nav className={styles.nav}>{navbarLinks()}</nav>
      </div>
      <div className={navOn ? styles.mobileMenuOpen : styles.mobileMenu}>
        {mobileNavLinks(selectNav, setSelectNav)}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
