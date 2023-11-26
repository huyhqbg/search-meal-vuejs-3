<template>
  <div class="bg-gray-100 min-h-screen pb-20">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
</script>
