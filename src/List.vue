<script setup vapor>
const items = ['a', 'b']
</script>

<template>
  <p v-for="item in items" :key="item">{{ item }}</p>
</template>
