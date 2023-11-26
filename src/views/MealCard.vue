<template>
  <div class="bg-white shadow rounded-xl pb-2">
    <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
    </router-link>

    <div class="p-3">
      <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
      </router-link>
      <p>
        Sequi in quasi magnam aut mollitia explicabo et quos nemo quibusdam, dignissimos perferendis architecto. Minima!
      </p>
      <div v-if="showYoutubeBtn" class="mt-5">
        <YoutubeBtn :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import YoutubeBtn from '../common/button/YoutubeBtn.vue'
import { Meal } from '../types'

interface Props {
  meal: Meal
  showYoutubeBtn?: boolean
}

withDefaults(defineProps<Props>(), {
  showYoutubeBtn: true,
})
</script>
