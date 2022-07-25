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
  margin: 10px;
  background-color: white;
  border: 3px solid grey;
  width: 95%;
  padding: 15px;
  max-width: 480px;
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
  width: 100%;
`

const AlertTableCellWrapper = s.tr`
  border: 1px solid grey;
  border-collapse: collapse;
`

const AlertTableCell = s(Link)`
  display: flex;
  padding: 10px 7px 10px 7px;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const AlertTableCellTitle = s.div`
  color: black;
  text-align: left;
`

const AlertTableCellDate = s.small`
  color: grey;
  text-align: right;
`

const AlertTableHead = s.div`
  display: flex;
  padding: 10px 7px 10px 7px;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 3px solid grey;
  border-collapse: collapse;
`

const BlankLine = s.div`
  width: 100%;
  height: 2px;
  background-color: #dfdfdf;
  margin: 5px 0;
`

const alertTableHeader = (
  <AlertTableHead>
    <AlertTableCellTitle style={{ fontWeight: 'bolder' }}>
      제목
    </AlertTableCellTitle>
    <AlertTableCellDate style={{ fontSize: '15px' }}>
      날자
    </AlertTableCellDate>
  </AlertTableHead>
)

const AlertSubpanel = props => {
  const alertArray = props.page ? alertList : alertList.slice(0, 7)
  for (let i = alertArray.length; i < 7; i++) {
    alertArray[i] = {
      empty: true
    }
  }
  return (
  <AlertSubwrapper style={props.page && { width: '80%', maxWidth: 'none', padding: '0' }}>
    {
      !(props.page) &&
      <AlertSubtitle>
        알 림
      </AlertSubtitle>
    }
    <AlertTableWrapper style={props.page && { width: '100%' }}>
      {props.page && alertTableHeader}
      {alertArray.map(alert => (
        <AlertTableCellWrapper>
          <AlertTableCell to={`/alert/${alert.alertId}`}>
{ alert.empty
  ? <BlankLine></BlankLine>
  : <><AlertTableCellTitle>
              {alert.title}
            </AlertTableCellTitle><AlertTableCellDate>
                {alert.date && alert.date.toLocaleDateString('en-CA').slice(props.page ? 0 : 5)}
              </AlertTableCellDate></>
}          </AlertTableCell>
        </AlertTableCellWrapper>
      ))}
    </AlertTableWrapper>
  </AlertSubwrapper>
  )
}

export default AlertSubpanel
