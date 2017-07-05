import { observable, action } from 'mobx'

class AppStore {
  @observable isFetching = false
  @observable loggedUser = null
  @observable data = []

  @action test = async () => {
    this.isFetching = true
  }

   @action fetchInitialData = () => {
     console.log('load initial data')
   }
}

let singleton = new AppStore()
export default singleton
