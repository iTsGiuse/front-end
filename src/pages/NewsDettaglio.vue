<script>
    import news from '../../news.js';

    export default {
        name: 'NewsDettaglio',
        data() {
            return {
                newsItem: {},
            };
        },
        created() {
            this.fetchNewsItem();
        },
        methods: {
            fetchNewsItem() {
                const newsLink = this.$route.params.newsLink; // Recupera il parametro dal router
                // Trova l'elemento corrispondente in news
                this.newsItem = news.find(item => item.link === newsLink) || {};
            },
            getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
        }
    };
</script>

<template>
    <section id="news-dettaglio">
        <div class="container">
            <div class="row">
                <div class="col-12 my-3">
                    <h1>{{ newsItem.title }}</h1>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-4">
                    <div class="image-article">
                        <img :src="newsItem.src" alt="{{ newsItem.title }}" class="img-fluid">
                    </div>
                </div>
                <div class="col-8">
                    <p>{{ newsItem.description }}</p>
                    <div class="tags">
                        <span v-for="(tag, index) in newsItem.tag" :key="index" class="tag" :style="{ backgroundColor: getRandomColor() }">{{ tag }}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h5>Data: {{ newsItem.data }}</h5>
                        <h5>Autore: {{ newsItem.autore }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    #news-dettaglio{
        height: 120%;

        .news-detail{
            margin-top: 10px;
                
            .image-article{
                width: 25%;
                height: auto;

                img{
                    width: 100%;
                    height: auto;
                }

            }
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
        }

        .tag {
            border-radius: 100%;
            color: white;
            margin: 5px; 
            padding: 5%;
            font-size: 0.5em; 
            text-align: center;
        }
    
    }
</style>