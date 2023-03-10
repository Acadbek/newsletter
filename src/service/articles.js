import axios from './axios'

const ArticlesService = {
  getArticles() {
    return axios.get('/articles')
  },
  getArticleDetail(slug) {
    return axios.get(`/articles/${slug}`)
  },
  post(article) {
    return axios.post(`/articles`, { article })
  },
  delete(slug) {
    return axios.delete(`/articles/${slug}`)
  },
}

export default ArticlesService;