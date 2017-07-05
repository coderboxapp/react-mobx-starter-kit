import React from 'react'
import styled from 'styled-components'
import styles from './index.styles'

const Heading = styled(({ level, palette, tone, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.defaultProps = {
  level: 1,
  palette: 'black',
  tone: 1
}

export default Heading
