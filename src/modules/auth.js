import { setItem } from '@/helpers/storageFn'
import AuthService from '@/service/auth'

const state = {
  isLoading: false,
  user: null,
  error: null
}

const mutations = {
  registerStart(state) {
    state.isLoading = true,
      state.user = null,
      state.error = null
  },
  registerSuccess(state, payload) {
    state.isLoading = false,
      state.user = payload
  },
  registerFailed(state, payload) {
    state.isLoading = false,
      state.error = payload
  },
  loginStart(state) {
    state.isLoading = true,
      state.user = null,
      state.error = null
  },
  loginSuccess(state, payload) {
    state.isLoading = false,
      state.user = payload
  },
  loginFailed(state, payload) {
    state.isLoading = false,
      state.error = payload
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
  }
}

export default { state, mutations, actions }