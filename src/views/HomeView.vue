<script setup>

  import Counter from '@/components/Counter.vue'
  import { useUserStore } from '@/stores/user.js'
  import { storeToRefs } from 'pinia';

  // la destructiring c'est les 2 syntaxes suivant
  const authStore = useUserStore()
  const { isAuthenticated, user } = storeToRefs(authStore)

</script>

<template>
  <main>+

    <h1>Home Page</h1>

    <div v-if="isAuthenticated">
      <h2>Nom  = {{ user.name }}</h2>
      <h2>email = {{ user.email }}</h2>
    </div>
    <div v-else>
      <h2>Nom = Anonyme </h2>
    </div>

    <Counter />
  </main>
</template>
