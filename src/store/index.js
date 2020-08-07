import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Api'

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
    },
    setDishes (state, dishes) {
      state.dishes = dishes.sort((a, b) => b.id - a.id)
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
      // if (tmpState.serverUrl) {
      //   const dishes = await Api.Dish.readAll({ serverUrl: tmpState.serverUrl })
      //   console.log(dishes)
      //   commit('setDishes', dishes)
      // }
    },
    async reloadDishes ({ commit, state }) {
      const dishes = await Api.Dish.readAll(state)
      commit('setDishes', dishes)
    },
    async addDish ({ commit, state }, { parentId }) {
      const dish = await Api.Dish.create(state, parentId)
      commit('setDishes', [...state.dishes, dish])
    },
    async removeDish ({ commit, state }, { id }) {
      await Api.Dish.delete(state, id)
      commit('setDishes', state.dishes.filter(d => d.id !== id))
    },
    async updateDish ({ commit, state }, { dish }) {
      const d = await Api.Dish.update(state, dish.id, dish)
      console.log(d, state.dishes)
      commit('setDishes', [...state.dishes.filter(d => d.id !== dish.id), dish])
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
