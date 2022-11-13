<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import { useUserStore } from '@/stores/user.js'

  const authStore = useUserStore()

</script>

  <template>
    <header>
      

      <div class="wrapper">      

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <button class="monBouton" @click="authStore.logout">logout</button>
        </nav>
      </div>
    </header>
    
    <RouterView />

  </template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
}

nav a.router-link-exact-active .monBouton {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover  {
  background-color: transparent;
}

nav a  {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.monBouton {
  border: 0;
  background-color: transparent;
  color: hsl(160deg 100% 37%);
  cursor: pointer;
  border-left: 1px solid var(--color-border);
  padding: 0 1rem;
  font-size: 15px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
