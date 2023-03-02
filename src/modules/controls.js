import ArticlesService from '@/service/articles'

const state = {
  isLoading: false
}

const mutations = {
  postStart(state) {
    state.isLoading = true
  },
  postSuccess(state) {
    state.isLoading = false
  },
  postFailed(state) {
    state.isLoading = false
  }
}

const actions = {
  postData(context, article) {
    return new Promise((resolve, reject) => {
      context.commit('postStart')
      ArticlesService.post(article)
        .then(() => context.commit('postSuccess'))
        .catch(() => context.commit('postFailed'))
    })
  }
}

export default { state, mutations, actions }