import React from 'react'
import { bool } from 'prop-types'

/** Routing */
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'theme'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends React.Component {
  static propTypes = {
    isFetching: bool
  }

  render () {
    const { isFetching } = this.props

    if (isFetching) {
      return <div>Loading...</div>
    }

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
