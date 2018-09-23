<template>
  <div>
    <Navbar/>
    <b-container id="app">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Home,
    Navbar
  }
}
</script>
<style>
  #app{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>