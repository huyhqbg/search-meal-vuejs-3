import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'
import Ingredients from '../views/Ingredients.vue'
import MealVue from '../views/Meal.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: SearchByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: SearchByLetter
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-ingredients/:ingredient',
        name: 'byIngredient',
        component: SearchByIngredient
      },
      {
        path: '/meal/:id',
        name: 'meal',
        component: MealVue
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router