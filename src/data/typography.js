import React from 'react'
import '../styles/typography.css'

export const SubHeading = ({ children, className = '', style }) => (
  <div className={`sub-heading ${className}`.trim()} style={style}>{children}</div>
)

export const SmallerSubHeading = ({ children, className = '', style }) => (
  <div className={`smaller-sub-heading ${className}`.trim()} style={style}>{children}</div>
)

export const TextWrapperOne = ({ children, className = '', style }) => (
  <div className={`text-wrapper-one ${className}`.trim()} style={style}>{children}</div>
)

export const TextSubheading = ({ children, className = '', style }) => (
  <div className={`text-subheading ${className}`.trim()} style={style}>{children}</div>
)

export const TextSubheadingSmall = ({ children, className = '', style }) => (
  <h5 className={className} style={style}>{children}</h5>
)

export const Text = ({ children, className = '', style }) => (
  <p className={`text-body ${className}`.trim()} style={style}>{children}</p>
)

export const BoldText = ({ children, className = '', style }) => (
  <div className={`bold-text ${className}`.trim()} style={style}>{children}</div>
)

export const DownloadLink = ({ children, className = '', style, ...props }) => (
  <a className={`download-link ${className}`.trim()} style={style} {...props}>{children}</a>
)
