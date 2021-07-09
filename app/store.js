//Holds all the data for the entire application
//Holds all of the models based on the data provided

//the state holds all the data (THIS IS PRIVATE which is why it's underscore)
let _state = {
  allItems: []
}
//only want a single instance of store
class Store {
  //get means we will treat State as a property
  get State() {
    return _state
  }
  commit(prop, data) {
    _state[prop] = data;
  }
}

const store = new Store()
export default store