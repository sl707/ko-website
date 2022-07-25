import React from 'react'
import s from 'styled-components'

export const SubHeading = s.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0;
`

export const SmallerSubHeading = s.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const TextWrapperOne = s.div`
  padding: 15px;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: justify;
  white-space: pre-line;
`

export const TextSubheading = s.h3`
`

export const TextSubheadingSmall = s.h5`
`

export const Text = s.p`
`

export const BoldText = s.div`
  &&& {
    font-weight: bold !important;
  }
`

export const DownloadLink = s.a`
`
