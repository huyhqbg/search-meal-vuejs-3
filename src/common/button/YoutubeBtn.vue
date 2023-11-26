<template>
  <a :href="href" target="_blank" class="mr-4">
    <button class="px-3 py-2 rounded border bg-red-500 hover:bg-red-600 text-white transition-colors">
      {{ text || 'Youtube' }}
    </button>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href?: string
  text?: string
}

defineProps<Props>()
</script>
