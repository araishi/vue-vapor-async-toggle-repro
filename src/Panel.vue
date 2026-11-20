<script setup vapor>
import { defineVaporAsyncComponent } from 'vue'

defineProps(['open'])

const List = defineVaporAsyncComponent(() => import('./List.vue'))
</script>

<template>
  <List v-if="open" />
</template>
