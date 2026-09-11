import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import theme from '../theme'

const BlockWrapper = s(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  height: 180px;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  background-color: ${theme.colors.surface};
  box-shadow: ${theme.shadows.md};
  transition: transform ${theme.transitions.normal},
    box-shadow ${theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`

const BlockImage = s.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.normal};
`

const BlockOverlay = s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 46, 76, 0.75) 0%,
    rgba(26, 46, 76, 0.25) 60%,
    rgba(26, 46, 76, 0.1) 100%
  );
  transition: background ${theme.transitions.normal};
`

const BlockText = s.div`
  position: relative;
  z-index: 2;
  font-family: ${theme.fonts.serif};
  font-size: 1.35rem;
  font-weight: 600;
  color: ${theme.colors.textLight};
  letter-spacing: 0.08em;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`

const LinkBlock = props => (
  <BlockWrapper to={props.blkLink}>
    <BlockImage src={props.blkImage} alt={props.blkTitle} />
    <BlockOverlay />
    <BlockText>
      {props.blkTitle}
      {props.blkTitle2 && (
        <>
          <br />
          {props.blkTitle2}
        </>
      )}
    </BlockText>
  </BlockWrapper>
)

export default LinkBlock
