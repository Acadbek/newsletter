import axios from './axios'

const ArticlesService = {
  getArticles() {
    return axios.get('/articles')
  },
  getArticleDetail(slug) {
    return axios.get(`/articles/${slug}`)
  },
}

export default ArticlesService;