import React from 'react'
import s from 'styled-components'

export const SubHeading = s.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0;
  font-size: 23px;
`

export const SmallerSubHeading = s.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-bottom: 10px;
  margin: 0;
  top: 100%;
  font-size: 23px;
`

export const TextWrapperOne = s.div`
  padding: 15px;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: justify;
  white-space: pre-line;
`

export const TextSubheading = s.div`
  
`

export const TextSubheadingSmall = s.h5`
`

export const Text = s.p`
  white-space: pre-wrap;
  word-break: keep-all;
  line-break: strict;
`

export const BoldText = s.div`
  &&& {
    font-weight: bold !important;
  }
`

export const DownloadLink = s.a`
`
