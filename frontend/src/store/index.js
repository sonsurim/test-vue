import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      userInfo: {},
    }
  },
  mutations: {
    UPDATE_INFO(state, {key, value}) {
      state.userInfo[key] = value
    }
  }
})