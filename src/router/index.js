import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Projects = () => import('../pages/Projects.vue')
const Materials = () => import('../pages/Materials.vue')
const Contact = () => import('../pages/Contact.vue')

const Skills = () => import('../pages/Skills.vue')
const Experience = () => import('../pages/Experience.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/materials', name: 'Materials', component: Materials },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
