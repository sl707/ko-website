import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import navLinks from '../data/navigation'
import alertList from '../data/alerts'

const AlertSubwrapper = s.div`
  display: table-row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background-color: white;
  border: 3px solid grey;
 `

const AlertSubtitle = s.h1`
  position: relative;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const AlertTableWrapper = s.table`
  border: 1px solid grey;
  border-collapse: collapse;
  width: 420px;
`

const AlertTableCell = s(Link)`
  display: flex;
  padding: 10px 7px 10px 7px;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid grey;
`

const AlertTableCellTitle = s.div`
  color: black;
  text-align: left;
`

const AlertTableCellDate = s.small`
  color: grey;
  text-align: right;
`

const AlertSubpanel = () => (
  <AlertSubwrapper>
    <AlertSubtitle>
      공지사항
    </AlertSubtitle>
    <AlertTableWrapper>
      {alertList.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 7).map(alert => (
          <AlertTableCell to={`/alert/${alert.alertId}`}>
            <AlertTableCellTitle>
              {alert.title}
            </AlertTableCellTitle>
            <AlertTableCellDate>
              {alert.date.toLocaleDateString('en-CA').slice(5)}
            </AlertTableCellDate>
          </AlertTableCell>
      ))}
    </AlertTableWrapper>
  </AlertSubwrapper>
)

export default AlertSubpanel
