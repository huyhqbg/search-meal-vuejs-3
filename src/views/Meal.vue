<template>
  <div v-if="meal" class="max-w-[800px] min-w-[300px] w-full mx-auto mt-10">
    <h2 class="text-3xl font-bold">
      {{ meal?.strMeal }}
    </h2>

    <img class="w-full h-auto mt-10" :src="meal?.strMealThumb" :alt="meal?.strMeal" />

    <section class="mt-5 grid grid-cols-1 sm:grid-cols-3">
      <div><span class="font-semibold">Category: </span>{{ meal?.strCategory }}</div>
      <div><span class="font-semibold">Area: </span>{{ meal?.strArea }}</div>
      <div><span class="font-semibold">Tags: </span>{{ meal?.strTags }}</div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2">
      <div class="mt-5">
        <h4 class="text-2xl font-bold">Ingredients</h4>
        <ul class="mt-2">
          <template v-for="(_, index) in new Array(20)">
            <li v-if="meal?.[`strIngredient${index + 1}`]?.trim()">
              {{ index + 1 }}. {{ meal?.[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-5">
        <h4 class="text-2xl font-bold">Measures</h4>
        <ul class="mt-2">
          <template v-for="(_, index) in new Array(20)">
            <li v-if="meal?.[`strMeasure${index + 1}`]?.trim()">{{ index + 1 }}. {{ meal?.[`strMeasure${index + 1}`] }}</li>
          </template>
        </ul>
      </div>
    </section>

    <section class="mt-5">
      <h4 class="text-2xl font-bold">Instruction:</h4>
      <div class="mt-2">
        <div class="mt-2" v-for="instruction in instructions">
          <template v-if="instruction">
            {{ isNaN(Number(instruction[0])) ? '-' : '' }}
            {{ instruction }}
          </template>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <YoutubeBtn :href="meal?.strYoutube" />
      <a :href="meal?.strSource">
        <button
          class="px-3 py-2 border border-transparent rounded text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
        >
          View Original Source
        </button>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import { GET_MEAL_ACTION } from '../store/actions'
import YoutubeBtn from '../common/button/YoutubeBtn.vue'

const route = useRoute()
const meal = computed(() => store.state.meal)
const instructions = computed(() => {
  const str = meal.value?.strInstructions
  let rs: string[] | undefined = undefined

  if (meal.value?.strInstructions) {
    const lines = str?.split('\r\n')
    rs = lines
  }

  return rs
})

onMounted(() => {
  const id = route.params.id as string
  store.dispatch(GET_MEAL_ACTION, id)
})
</script>
