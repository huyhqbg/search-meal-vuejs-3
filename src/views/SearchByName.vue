<template>
  <h1 class="mt-8 px-8 text-4xl font-bold text-purple-600">Search Meals</h1>

  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="block rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @keyup.enter="searchMeals"
    />
  </div>

  <div v-if="meals?.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 px-8">
    <template v-for="meal in meals" :key="meal?.idMeal">
      <MealCard :meal="meal" />
    </template>
  </div>

  <div v-else class="pt-20 px-8 text-center">There is no meals</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import { SEARCH_MEALS_ACTION } from '../store/actions'
import MealCard from './MealCard.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
  store.dispatch(SEARCH_MEALS_ACTION, keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name as string

  if (keyword.value) {
    searchMeals()
  }
})
</script>
