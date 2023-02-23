import axios from './axios';

const AuthService = {
  register(user) {
    return axios.post('/users', { user })
  },
  login(user) {
    return axios.post('/users/login', { user })
  }
}

export default AuthService;