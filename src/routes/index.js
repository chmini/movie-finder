import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'
import SearchResult from './SearchResult'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResult
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
