<template>
  <h1 class="mt-8 px-8 text-4xl font-bold text-purple-600">
    Meals by <span class="capitalize">{{ ingredient }}</span>
  </h1>

  <div v-if="meals?.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 px-8">
    <template v-for="meal in meals" :key="meal?.idMeal">
      <MealCard :meal="meal" :showYoutubeBtn="false" />
    </template>
  </div>

  <div v-else class="pt-20 px-8 text-center">There is no meals</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import store from '../store'
import { SEARCH_MEALS_BY_INGREDIENT_ACTION } from '../store/actions'
import MealCard from './MealCard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const meals = computed(() => store.state.searchedMealsByIngredient)
const ingredientParam = route.params.ingredient as string
const ingredient = ingredientParam.replace('_', ' ')

onMounted(() => {
  store.dispatch(SEARCH_MEALS_BY_INGREDIENT_ACTION, ingredientParam)
})
</script>
