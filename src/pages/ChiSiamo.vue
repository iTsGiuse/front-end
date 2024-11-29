<script>
import Hero from '../components/Chi Siamo/Hero.vue';
import Mission from '../components/Chi Siamo/Mission.vue';
import Team from '../components/Chi Siamo/Team.vue';

export default {
  name: 'ChiSiamo',
  components: {
    Hero,
    Mission,
    Team
  }
}
</script>

<template>
  <section id="chi-siamo">
      <Hero></Hero>
      <Mission></Mission>
      <Team></Team>
  </section>
</template>

<style lang="scss" scoped>

</style>
  