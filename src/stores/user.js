import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', () => {
  
  const user = ref({
    name: 'lapinragnar',
    email: 'lapinragnar@gmail.com'
  })

  const isAuthenticated = ref(true)

  function logout() {
    isAuthenticated.value = !isAuthenticated.value
  }


  return { user, isAuthenticated, logout }
})