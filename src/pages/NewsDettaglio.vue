<script>
import newsData from '../assets/news.json';

export default {
  name: 'NewsDettaglio',
  data() {
    return {
      news: {}
    };
  },
  created() {
    const newsTitle = this.$route.params.newsTitle;
    this.news = newsData.find(news => news.link === newsTitle) || {};
  }
}
</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col">
        <div class="news-detail">
          <h2>{{ news.title }}</h2>
          <img :src="`/assets/images/${news.src}`" class="d-block w-100" alt="News image">
          <p>{{ news.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Aggiungi stili se necessario */
</style>