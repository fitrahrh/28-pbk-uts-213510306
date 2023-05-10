<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="app">
    <header>
        <nav>
          <div class="text-teal-500">
            <RouterLink class="hover:text-teal-300" to="/">Home</RouterLink> |
            <RouterLink class="hover:text-teal-300" to="/kegiatan">Kegiatan</RouterLink> |
            <RouterLink class="hover:text-teal-300" to="/about">About</RouterLink> 
          </div>
        </nav>
    </header>
    
    <RouterView />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 0px;
  text-align: center;
  background-color: black;
  padding: 15px;
  border-radius: 7px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  font-size: 16px;
  color: white;
}


nav a:hover {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  color: white;
}

nav a.router-link-exact-active {
  color: black;
  background: white;
  border-radius: 5px;
}
</style>