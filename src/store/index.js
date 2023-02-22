import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 1
    }
  },
  mutations: {
    increment(store) {
      store.count++
    }
  }
})

export default store