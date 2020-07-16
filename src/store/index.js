import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    serverUrl: '',
    displayMode: '',
    dishes: [],
    rooms: [],
    tables: [],
    orders: [],
    orderItems: []
  },
  mutations: {
    initialiseStore (state, newState) {
      this.replaceState(newState)
    },
    setServerUrl (state, url) {
      state.serverUrl = url
    },
    setDisplayMode (state, displayMode) {
      state.displayMode = displayMode
    }
  },
  actions: {
    async initialiseStore ({ commit, state }) {
      let tmpState = Object.assign({}, state)

      if (localStorage.getItem('store')) {
        tmpState = Object.assign(
          tmpState,
          JSON.parse(localStorage.getItem('store'))
        )
      }
      commit('initialiseStore', tmpState)
    }
  },
  modules: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem(
    'store',
    JSON.stringify({
      serverUrl: state.serverUrl,
      displayMode: state.displayMode
    })
  )
})

export default store
