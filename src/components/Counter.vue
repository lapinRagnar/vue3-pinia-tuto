<template>
  
  <h1>Counter</h1>
  <h3>Afficher les données de mon useCounterStore </h3>

  <h3> Counter : {{ store.count }}</h3>
  
  <button @click="store.increment">+</button>
  <button @click="store.decrement">-</button>
  <h3> Modifier la valeur de counter dans un computed
     - Double Counter : {{ store.doubleCount }}
  </h3>


</template>

<script setup>

  import { useCounterStore } from '@/stores/counter.js'
  
  const store = useCounterStore()


</script>