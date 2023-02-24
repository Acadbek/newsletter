import { setItem, removeItem, getItem } from '@/helpers/storageFn'
import AuthService from '@/service/auth'
import { getterType } from './types'

const state = {
  isLoading: false,
  user: null,
  error: null,
  registeredUser: null
}

const getters = {
  [getterType.currentUser]: state => {
    return state.user
  },
  [getterType.registeredUser]: state => {
    return Boolean(state.registeredUser)
  },
  [getterType.isAnonymous]: state => {
    return state.registeredUser === false
  }
}

const mutations = {
  registerStart(state) {
    state.isLoading = true,
      state.user = null,
      state.error = null
    state.registeredUser = null
  },
  registerSuccess(state, payload) {
    state.isLoading = false,
      state.user = payload
    state.registeredUser = true
  },
  registerFailed(state, payload) {
    state.isLoading = false,
      state.error = payload
    state.registeredUser = false
  },
  loginStart(state) {
    state.isLoading = true,
      state.user = null,
      state.error = null
  },
  loginSuccess(state, payload) {
    state.isLoading = false,
      state.user = payload
    state.registeredUser = true
  },
  loginFailed(state, payload) {
    state.isLoading = false,
      state.error = payload
    state.registeredUser = false
  },
  currentUserStart(state) {
    state.isLoading = true
  },
  currentUserSuccess(state, payload) {
    state.isLoading = false,
      state.user = payload
    state.registeredUser = true
  },
  currentUserFailed(state) {
    state.isLoading = false,
      state.user = null
    state.registeredUser = false
  },
  logout(state) {
    state.user = null,
      state.registeredUser = false
    removeItem('token')
  }
}

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthService.register(user).then((response) => {
        context.commit('registerSuccess', response.data.user)
        setItem('token', response.data.user.token)
        resolve(response.data.user)
      }).catch((err) => {
        context.commit('registerFailed', err.response?.data?.errors)
        reject(err.response?.data?.errors)
      })
    })
  },
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('loginStart');
      AuthService.login(user)
        .then((response) => {
          context.commit('loginSuccess', response.data.user)
          setItem('token', response.data.user.token)
          resolve(response.data.user)
        }).catch((err) => {
          context.commit('loginFailed', err.response?.data?.errors)
          reject(err.response?.data?.errors)
        })
    })
  },
  getCurrentUser(context) {
    return new Promise(resolve => {
      context.commit('currentUserStart')
      AuthService.getCurrentUser().then(response => {
        context.commit('currentUserSuccess', response.data.user)
        resolve(response.data.user)
      }).catch(err => context.commit('currentUserFailed'))
    })
  }
}

export default { state, mutations, actions, getters }