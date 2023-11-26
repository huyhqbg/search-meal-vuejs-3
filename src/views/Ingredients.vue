<template>
  <div class="px-8 mx-auto mt-8">
    <h1 class="text-4xl font-bold text-purple-600">Ingredients</h1>

    <input
      type="text"
      v-model="keyword"
      class="block rounded mt-5 border-2 border-gray-200 w-full"
      placeholder="Search for Ingredients"
      @change="filterIngredients"
    />

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <template v-for="ingredient in ingredients" :key="ingredient.idIngredient">
        <router-link
          :to="{
            name: 'byIngredient',
            params: { ingredient: ingredient?.strIngredient?.replace(' ', '_').toLowerCase() },
          }"
          class="p-3 bg-white rounded shadow-md"
        >
          <div class="text-2xl font-bold hover:text-purple-600">
            {{ ingredient.strIngredient }}
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import { GET_INGREDIENTS_ACTION } from '../store/actions'

const keyword = ref<string>('')
const ingredients = computed(() => {
  const rs = store.state.ingredients?.filter((item) => item?.strIngredient?.toLowerCase().includes(keyword.value))

  return rs
})

const filterIngredients = () => {}

onMounted(() => {
  store.dispatch(GET_INGREDIENTS_ACTION)
})
</script>
