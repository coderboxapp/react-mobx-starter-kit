import React from 'react'

// css
import {
  Wrapper,
  Content
} from './index.styles'

const SimpleTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default SimpleTemplate
