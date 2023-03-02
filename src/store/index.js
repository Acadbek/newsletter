import { createStore } from 'vuex';
import auth from '../modules/auth';
import articles from '../modules/articles';
import controls from '../modules/controls'

const store = createStore({
  // state() { },
  // mutations: {},
  // actions: {},
  modules: { auth, articles, controls }
})

export default store