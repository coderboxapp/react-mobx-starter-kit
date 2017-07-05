import React from 'react'

// style
import {
  Dialog,
  Header,
  Content,
  Footer
} from './index.styles'

const DialogComponent = ({
  header,
  footer,
  children,
  palette = 'primary',
  ...props
}) => {
  return (
    <Dialog {...props}>
      <Header palette={palette}>{header}</Header>
      <Content>
        {children}
      </Content>
      <Footer>{footer}</Footer>
    </Dialog>
  )
}

export default DialogComponent
