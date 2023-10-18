<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Header msg="Welcome to Header App"/>
  <Dharma msg="Welcome to Dharma App"/>
  <Galeri msg="Welcome to Galeri App"/>
  <Sambutan msg="Welcome to Sambutan App"/>
  <Location msg="HASANUDDIN UNIVERSITY" style="color: white; font: Inter;"/>
  <Footer msg="Welcome to Footer App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Dharma from './components/Dharma.vue'
import Galeri from './components/Galeri.vue'
import Sambutan from './components/Sambutan.vue'
import Location from './components/Location.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Header, Dharma, Footer, Galeri, Location, Sambutan
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
