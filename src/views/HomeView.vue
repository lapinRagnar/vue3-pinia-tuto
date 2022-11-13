<script setup>
  import { useCounterStore } from '@/stores/counter.js'

  const store = useCounterStore()

  console.log(store)
</script>

<template>
  <main>
    <h1>Home Page</h1>
  </main>
</template>
