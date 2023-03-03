import ArticlesService from '@/service/articles'

const state = {
  isLoading: false
}

const mutations = {
  controlStart(state) {
    state.isLoading = true
  },
  controlSuccess(state) {
    state.isLoading = false
  },
  controlFailed(state) {
    state.isLoading = false
  }
}

const actions = {
  postData(context, article) {
    return new Promise((resolve, reject) => {
      context.commit('controlStart')
      ArticlesService.post(article)
        .then(() => {
          context.commit('controlSuccess')
          resolve()
        })
        .catch(() => context.commit('controlFailed'))
    })
  },
  delete(context, slug) {
    return new Promise((resolve, reject) => {
      context.commit('controlStart')
      ArticlesService.delete(slug)
        .then(() => {
          context.commit('controlSuccess')
          resolve()
        })
        .catch(() => context.commit('controlFailed'))
    })
  }
}

export default { state, mutations, actions }