import { createRouter, createWebHistory } from 'vue-router'

import MovieDetail from './MovieDetail'
import NotFound from './NotFound'
import SearchResult from './SearchResult'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'searchResult',
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
