import { observable, action } from 'mobx'

class AppStore {
  @observable isFetching = false
  @observable loggedUser = null
  @observable data = []

  @action fetchInitialData = async () => {
    this.isFetching = true
    console.log('load initial data')
    // do asyng stuff
  }
}

let singleton = new AppStore()
export default singleton
