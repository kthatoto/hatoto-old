import Vue from 'vue'
import Router from 'vue-router'

import Movie from '@/movie/Movie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Movie
    }
  ]
})
