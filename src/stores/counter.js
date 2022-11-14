import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user.js'

export const useCounterStore = defineStore('counter', () => {

  //----------------------------------les states----------------------------------
  const count = ref(1)

  //---------------------------------- les guetters----------------------------------
  const doubleCount = computed(() => count.value * 2)
  
  // ---------------------------------- actions----------------------------------
  function increment() {

    if (!isAuthenticated()) return

    // count.value++   // c'est la meme chose en bas
    this.count++
  }

  function decrement() {

    if (!isAuthenticated()) return

    // count.value--
    this.count--
  }

  function isAuthenticated() {
    const authStore = useUserStore()
    return authStore.isAuthenticated
  }

  return { count, doubleCount, increment, decrement, isAuthenticated }
})
