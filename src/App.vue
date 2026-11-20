<script setup vapor>
import { ref } from 'vue'
import Panel from './Panel.vue'

const open = ref(true)
</script>

<template>
  <button @click="open = !open">toggle</button>
  <Panel :open="open" />
</template>
