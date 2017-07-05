import React from 'react'

// css
import { Link } from './index.styles'

const LinkComponent = ({ href, disabled, children, ...props }) => {
  return (
    <Link href={href} disabled={disabled} {...props}>
      {children}
    </Link>
  )
}

LinkComponent.defaultProps = {
  palette: 'black',
  tone: 0
}

export default LinkComponent
