import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Anime from '../views/Anime.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:query',
    name: 'search',
    component: Search,
    props: true
  },
  {
    path: '/anime/:AnimeName',
    name: 'anime',
    component: Anime,
    props: true
  },
  {
    path: '/video/:id',
    name: 'video',
    component: Video,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
