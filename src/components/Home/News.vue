<script>
   import news from '../../assets/Js/news.js';

export default {
    name: 'News',
    data() {
        return {
                newsItems: news
            };
        }
    
};
</script>

<template>
    <section class="news">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5 mb-3">
                    <h3>News</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="news-carosello" class="carousel slide carousel-small">
                        <div class="carousel-indicators">
                            <button v-for="(item, index) in newsItems" :key="'indicator-' + item.key" type="button" data-bs-target="#news-carosello" :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : undefined" :aria-label="'Slide ' + (index + 1)"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(item, index) in newsItems" :key="'carousel-item-' + item.key" :class="['carousel-item', { active: index === 0 }]">
                                <router-link :to="{ name: 'news', params: { newsLink: item.link } }">
                                    <div class="carousel-caption-top">
                                        <h5>{{ item.title }}</h5>
                                    </div>
                                    <img :src="item.src" class="d-block w-100" :alt="item.title">
                                </router-link>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#news-carosello" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#news-carosello" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .carousel-small {
        width: 100%;
        height: 100%;
        margin-bottom: 20px;

        .carousel-item, img {
            height: 300px; /* Limita altezza dell'immagine */
            object-fit: cover; /* Copertura dell'immagine */
        }
    }



    .carousel-caption-top {
        position: absolute;
        top: 10px; /* Posiziona il titolo in alto */
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5); /* Sfondo per contrasto */
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
    }

    .carousel-indicators {
        bottom: -20px; /* Sposta indicatori più in basso */
    }
</style>