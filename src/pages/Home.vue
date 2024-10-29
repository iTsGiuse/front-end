<script>
import newsData from '../assets/news.json';

export default {
    name: 'Home',
    data() {
        return {
            currentSlide: 0,
            images: newsData
        };
    },
    created() {
        console.log(this.images); 
        this.images.forEach(image => console.log(image.src)); 
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
        }
    }
}
</script>

<template>
    <main>
        <section class="news">
            <div class="container">
                <div class="row ">
                <div class="col my-5">
                    <h1>News</h1>
                </div>
                </div>
                <div class="row">
                <div class="col my-5">
                    <div id="carouselExampleIndicators" class="text-center carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button 
                            v-for="(image, index) in images" 
                            :key="index" 
                            type="button" 
                            :data-bs-target="'#carouselExampleIndicators'" 
                            :data-bs-slide-to="index" 
                            :class="{ active: currentSlide === index }" 
                            :aria-label="'Slide ' + (index + 1)">
                        </button>
                    </div>
                    <h5>{{ images[currentSlide].title }}</h5>
                    <div class="carousel-inner">
                        <div 
                            class="carousel-item" 
                            v-for="(image, index) in images" 
                            :key="index" 
                            :class="{ active: currentSlide === index }">
                        <router-link :to="`/news/${image.link}`">
                            <img 
                                :src="image.src" 
                                class="d-block w-100 fixed-size" 
                                :alt="image.title">
                        </router-link>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" @click="prevSlide">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" @click="nextSlide">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
  <style lang="scss" scoped>
    .fixed-size {
      width: 300px; 
      height: 200px; 
      object-fit: cover;
    }
  </style>