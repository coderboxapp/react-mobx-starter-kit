import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'containers'

// mobx
import { useStrict } from 'mobx'
import { enableLogging } from 'mobx-logger'
import { Provider as MobxProvider } from 'mobx-react'

// stores
import * as stores from 'stores'

document.startApp = function (container) {
  // mobx
  useStrict(true)
  enableLogging({ action: true, compute: false })

  ReactDOM.render(
    <MobxProvider {...stores}>
      <App />
    </MobxProvider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
