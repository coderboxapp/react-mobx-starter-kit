import React from 'react'
import { Icon } from '@coderbox/components'

// css
import { Link } from './styles'

const LinkComponent = ({ href, icon, disabled, palette, tone, children, ...props }) => {
  return (
    <Link href={href} disabled={disabled} palette={palette} tone={tone} {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </Link>
  )
}

LinkComponent.defaultProps = {
  palette: 'black',
  disabled: false,
  tone: 1
}

export default LinkComponent
