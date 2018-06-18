import {
  SET_DISPLAY_SIZE
} from './mutation_types'
export default {
  setDisplaySize ({ commit }, display) {
    commit(SET_DISPLAY_SIZE, display)
  }
}
