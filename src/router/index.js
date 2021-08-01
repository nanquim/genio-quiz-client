import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogProfessor from '../views/LogProfessor'
import Aluno from '../views/Aluno'
import LogAluno from '../views/LogAluno'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/professor',
    name: 'LogProfessor',
    component: LogProfessor
  },
  {
    path: '/aluno',
    name: 'Aluno',
    component: Aluno
  },
  {
    path: '/aluno/log',
    name: 'LogAluno',
    component: LogAluno
  }
]

const router = new VueRouter({
  routes
})

export default router
