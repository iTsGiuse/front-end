<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import SpotifyPlayer from './components/SpotifyPlayer.vue';
</script>

<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
  <SpotifyPlayer></SpotifyPlayer>
</template>

<style lang="scss">
  *{
    font-family: "Cinzel", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
</style>
