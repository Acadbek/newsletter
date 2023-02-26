import ArticesService from '@/service/articles'

const state = {
  data: null,
  isLoading: false,
  error: null
}

const mutations = {
  getArticlesStart(state) {
    state.data = null,
      state.isLoading = true
  },
  getArticlesSuccess(state, payload) {
    state.data = payload,
      state.isLoading = false,
      state.error = null
    console.log(payload, 'payyyyyyyyyyyyy');
  },
  getArticlesFailed(state, payload) {
    state.data = null,
      state.isLoading = true,
      state.error = payload
    console.log(payload, 'errrrrrrrrrr');
  }
}

const actions = {
  getArticles(context) {
    return new Promise((resolve, reject) => {
      context.commit('getArticlesStart')
      ArticesService.getArticles().then((result) => {
        context.commit('getArticlesSuccess', result.data.articles)
        resolve(result.data.articles)
      }).catch(() => context.commit('getArticlesFailed', err.message));
    })
  }
}

export default {
  state, mutations, actions
}