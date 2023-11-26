<template>
  <h1 class="mt-8 px-8 text-4xl font-bold text-purple-600">Search Meals by Letter</h1>

  <div class="mt-5 flex justify-center gap-2">
    <router-link v-for="letter of letters.split('')" :to="{ name: 'byLetter', params: { letter } }">
      <span :class="{ 'font-bold text-purple-800': route.params.letter === letter }">
        {{ letter }}
      </span>
    </router-link>
  </div>

  <div v-if="meals?.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 px-8">
    <template v-for="meal in meals" :key="meal?.idMeal">
      <MealCard :meal="meal" />
    </template>
  </div>

  <div v-else class="pt-20 px-8 text-center">There is no meals</div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import { SEARCH_MEALS_BY_LETTER_ACTION } from '../store/actions'
import MealCard from './MealCard.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const route = useRoute()
const meals = computed(() => store.state.searchedMealsByLetter)

onMounted(() => {
  store.dispatch(SEARCH_MEALS_BY_LETTER_ACTION, route.params.letter as string)
})

watch(route, () => {
  store.dispatch(SEARCH_MEALS_BY_LETTER_ACTION, route.params.letter as string)
})
</script>
