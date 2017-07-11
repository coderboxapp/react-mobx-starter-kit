import React from 'react'

// styles
import { Wrapper } from './styles'

const InfoField = ({ label, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <label>{label}</label>
      <div>{children}</div>
    </Wrapper>
  )
}

InfoField.defaultProps = {
  palette: 'black'
}

export default InfoField
