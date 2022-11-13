<script setup>

  import Counter from '@/components/Counter.vue'
  import { useUserStore } from '@/stores/user.js'

  const authStore = useUserStore()

</script>

<template>
  <main>

    <h1>Home Page</h1>

    <div v-if="authStore.isAuthenticated">
      <h2>Nom de l'utilisateur = {{ authStore.user.name }}</h2>
    </div>
    <div v-else>
      <h2>Nom de l'utilisateur = Anonyme </h2>
    </div>

    <Counter />
  </main>
</template>
