import React from 'react'
import styled from 'styled-components'
import styles from './styles'

const Heading = styled(({ level, palette, tone, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.defaultProps = {
  palette: 'black',
  level: 1,
  tone: 1
}

export default Heading
