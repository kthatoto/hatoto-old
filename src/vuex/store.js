import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import {
  SET_DISPLAY_SIZE
} from './mutation_types'

Vue.use(Vuex)

const state = {
  display: {
    width: 0,
    height: 0
  }
}

const mutations = {
  [SET_DISPLAY_SIZE] (state, display) {
    state.display.width = display.width
    state.display.height = display.height
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})
