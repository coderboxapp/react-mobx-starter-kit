import React from 'react'

// styles
import { Line } from './styles'

const LineComponent = ({ size, ...props }) => {
  return <Line size={size} {...props} />
}

LineComponent.defaultProps = {
  palette: 'black',
  tone: 1
}

export default LineComponent
