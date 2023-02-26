import ArticesService from '@/service/articles'

const state = {
  data: null,
  isLoading: false,
  error: null,
  articleDetail: null
}

const mutations = {
  getArticlesStart(state) {
    state.data = null,
      state.isLoading = true
    state.articleDetail = null
  },
  getArticlesSuccess(state, payload) {
    state.data = payload,
      state.isLoading = false,
      state.error = null
  },
  getArticlesFailed(state, payload) {
    state.data = null,
      state.isLoading = false,
      state.error = payload
  },
  getArticleDetailsStart(state) {
    state.articleDetail = null,
      state.isLoading = true
  },
  getArticlesDetailSuccess(state, payload) {
    state.articleDetail = payload,
      state.isLoading = false,
      state.error = null
  },
  getArticlesDetailFailed(state, payload) {
    state.isLoading = false
  }
}

const actions = {
  getArticles(context) {
    return new Promise((resolve, reject) => {
      context.commit('getArticlesStart')
      ArticesService.getArticles().then((response) => {
        context.commit('getArticlesSuccess', response.data.articles)
        resolve(response.data.articles)
      }).catch(() => context.commit('getArticlesFailed', err.message));
    })
  },
  getArticleDetail(context, slug) {
    return new Promise((resolve, reject) => {
      context.commit('getArticleDetailsStart');
      ArticesService.getArticleDetail(slug).then((response) => {
        console.log(response);
        context.commit('getArticlesDetailSuccess', response.data.article)
        resolve(response.data.article)
      }).catch((err) => context.commit('getArticlesDetailFailed'))
    })
  }
}

export default {
  state, mutations, actions
}