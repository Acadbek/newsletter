import AuthService from '../service/auth'

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
  }
}

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthService.register(user).then((response) => {
        context.commit('registerSuccess', response.data.user)
        resolve(response.data.user)
      }).catch((err) => {
        context.commit('registerFailed', err.response.data.errors)
        reject(err.response.data.errors)
      })
    })
  }
}

export default { state, mutations, actions }