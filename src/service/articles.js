import axios from './axios'

const ArticlesService = {
  getArticles() {
    return axios.get('/articles')
  }
}

export default ArticlesService;