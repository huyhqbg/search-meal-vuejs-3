<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="h-full flex items-center text-xl px-5 font-bold text-purple-600">
      Home
    </router-link>

    <div class="h-full flex">
      <router-link :to="{ name: 'byName' }" class="grid place-content-center px-2 hover:bg-purple-200">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }" class="grid place-content-center px-2 hover:bg-purple-200">
        Meals by Letters
      </router-link>
      <router-link :to="{ name: 'ingredients' }" class="grid place-content-center px-2 hover:bg-purple-200">
        Ingredients
      </router-link>
    </div>
  </header>
</template>
