<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
  *{
    font-family: "Cinzel", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
</style>
