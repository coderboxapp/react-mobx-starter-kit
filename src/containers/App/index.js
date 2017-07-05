import React from 'react'
import { App } from 'components'
import { inject, observer } from 'mobx-react'

@observer
class AppContainer extends React.Component {
  componentDidMount () {
    let { onReady } = this.props
    if (onReady) onReady()
  }

  render () {
    return <App {...this.props} />
  }
}

export default inject(
  ({ appStore }, ownProps) => {
    return {
      isFetching: appStore.isFetching,
      onReady: () => appStore.fetchInitialData()
    }
  })(AppContainer)
