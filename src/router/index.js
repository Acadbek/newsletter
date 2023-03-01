import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView, RegisterView, ArticleDetailsView } from '@/views'
import { CreatePost } from '@/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/news',
      name: 'news',
      component: HomeView
    },
    {
      path: '/news/:slug',
      name: 'news-detail',
      component: ArticleDetailsView
    },
    {
      path: '/post',
      name: 'post',
      component: CreatePost
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
