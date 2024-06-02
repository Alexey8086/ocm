import { createRouter, createWebHistory } from 'vue-router'
import {
  CharactersList,
  CharacterDiagram,
} from '#pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'character-list',
      component: CharactersList
    },
    {
      path: '/diagram',
      name: 'character-diagram',
      component: CharacterDiagram
    }
  ]
})

export default router