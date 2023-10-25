<template>
  <div class="flex flex-col min-h-min font-Montserrat bg-white space-y-9">
    <Header/>
    <Sambutan/>
    <Galeri/>
    <Dharma/>
    <News/>
    <Location/>
    <Footer/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Sambutan from './components/Sambutan.vue'
import Galeri from './components/Galeri.vue'
import Dharma from './components/Dharma.vue'
import News from './components/News.vue'
import Location from './components/Location.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss" scoped></style>