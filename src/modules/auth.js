const state = {
  isLoading: false
}

const mutations = {
  setLoading(state) {
    state.isLoading = !state.isLoading
  }
}

const actions = {
  register(context) {
    setTimeout(() => {
      context.commit('setLoading')
    }, 1000);
  }
}

export default { state, mutations, actions }