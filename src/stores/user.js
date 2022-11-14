import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', () => {
  
  // ----------------------------------les states----------------------------------
  const isAuthenticated = ref(false)

  const user = ref({
    name: 'lapinragnar',
    email: 'lapinragnar@gmail.com'
  })

  // ----------------------------------les guetters----------------------------------
  const fullName = computed(() => `${user.name} {user.email}`)

  
  // ---------------------------------- les actions ----------------------------------
  
  function logout() {
    this.$patch(() => {
      (this.isAuthenticated = false),
      (this.user = {}) 
    })
  }

  function login() {
    user.value.name = 'lapinragnar'
    user.value.email = 'lapinragnar@gmail.com'

    this.isAuthenticated = true

    console.log('user', user.value)
  }




  return { user, isAuthenticated, logout, login, fullName }
})