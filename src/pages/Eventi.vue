<script>
import events from '../../events';

export default {
    data() {
        console.log(events);
        return {
            events,
        };
    },
};
</script>

<template>
    <section id="eventi">
        <div class="container my-5">
            <div class="d-flex justify-content-center flex-wrap">
                <div v-for="evento in events" :key="evento.key" class="flip-card m-3">
                    <div class="flip-card-inner">
                        <!-- Fronte della Card - Mostra Immagine -->
                        <div class="flip-card-front card">
                            <img :src="evento.src" class="card-img-top" :alt="evento.title" />
                        </div>
                        <!-- Retro della Card - Mostra Dettagli Evento -->
                        <div class="flip-card-back card-body">
                            <h3 class="card-title">{{ evento.title }}</h3><br>
                            <p class="card-text">{{ evento.description }}</p><br>
                            <p class="card-text"><strong>Data:</strong> {{ evento.date }}</p>

                            <ul>
                                <li v-for="service in evento.services" :key="service">{{ service }}</li>
                            </ul>
                            <router-link class="btn btn-danger" :to="{ name: 'evento', params: { eventoLink: evento.link } }">Scopri info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
  <style scoped lang="scss">
    #eventi{

        .flip-card {
            width: 400px;
            height: 500px;
            perspective: 1000px;
        }
        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 10px;
            overflow: hidden;
        }
        .flip-card-front {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ddd;
        }
        .flip-card-back {
            background-color: #f8f9fa;
            color: #333;
            padding: 20px;
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #ddd;

            p{
                font-weight: bold;
            }
        }
        .card-img-top {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  </style>