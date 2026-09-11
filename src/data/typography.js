import s from 'styled-components'
import theme from '../theme'

export const SubHeading = s.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px var(--size-gutter) 8px;
  margin: 0;
  font-family: ${theme.fonts.serif};
  font-size: 1.35rem;
  font-weight: 600;
  color: ${theme.colors.primary};
`

export const SmallerSubHeading = s.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px var(--size-gutter) 8px;
  margin: 0;
  font-family: ${theme.fonts.serif};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.colors.primary};
`

export const TextWrapperOne = s.div`
  padding: 16px var(--size-gutter);
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  justify-content: center;
`

export const TextSubheading = s.div``

export const TextSubheadingSmall = s.h5``

export const Text = s.p`
  white-space: pre-wrap;
  word-break: keep-all;
  line-break: strict;
  line-height: 1.85;
  font-size: 1rem;
  color: ${theme.colors.text};
  max-width: 720px;
`

export const BoldText = s.div`
  font-weight: 700;
  color: ${theme.colors.primary};
`

export const DownloadLink = s.a`
  color: ${theme.colors.primary};
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${theme.colors.accentDark};
  }
`
