<script>
import events from '../../events';

export default {
    data() {
        return {
            events,
        };
    },
    methods: {
        checkEventStatus(eventDate) {
            const today = new Date();
            const event = new Date(eventDate);
            const daysDiff = Math.ceil((event - today) / (1000 * 60 * 60 * 24));
            const isDisabled = daysDiff > 0 && daysDiff <= 30; 

            return {
                isDisabled,
                daysUntilUnlock: daysDiff > 0 ? daysDiff : 0
            };
        }
    },
    computed: {
        sortedEvents() {
            return this.events.sort((a, b) => b.key - a.key); 
        }
    },
};
</script>

<template>
    <section id="eventi">
        <div class="container my-5">
            <div class="row">
                <div class="col-12 text-center my-3 mb-4">
                    <h2>Eventi:</h2>
                </div>
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <div v-for="evento in sortedEvents" :key="evento.key" class="flip-card m-3" :class="{ 'disabled-card': checkEventStatus(evento.date).isDisabled }">
                    <div class="flip-card-inner">
                        <!-- Fronte della Card - Mostra Immagine -->
                        <div class="flip-card-front card">
                            <img :src="evento.src" class="card-img-top" :alt="evento.title" />
                            <div v-if="checkEventStatus(evento.date).isDisabled" class="overlay">
                                <div class="text-center">
                                    <i class="fas fa-hourglass-half"></i>
                                    <p class="countdown" v-if="checkEventStatus(evento.date).daysUntilUnlock > 0">{{ checkEventStatus(evento.date).daysUntilUnlock }} giorni rimanenti</p>
                                </div>
                            </div>    
                        </div>
                        <!-- Retro della Card - Mostra Dettagli Evento -->
                        <div class="flip-card-back card-body">
                            <h3 class="card-title">{{ evento.title }}</h3><br>
                            <p class="card-text">{{ evento.description }}</p><br>
                            <p class="card-text"><strong>Data:</strong> {{ evento.date }}</p>
                            <ul>
                                <li v-for="service in evento.services" :key="service">{{ service }}</li>
                            </ul>
                            <router-link v-if="!checkEventStatus(evento.date).isDisabled" class="btn btn-danger" :to="{ name: 'evento', params: { eventoLink: evento.link } }">Scopri info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#eventi {
    // INIZIO OSCURAMENTO CARD //
    .disabled-card {
        opacity: 1; 
        pointer-events: none; 
        position: relative; 
    }

    .overlay {
        position: absolute;
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;
        background-color: rgba(0, 0, 0, 12); 
        display: flex;
        align-items: center;
        justify-content: center; 
        color: white; 
        font-size: 2rem; 
        z-index: 1; 
    }

    .countdown {
        display: block;
        font-size: 1.4rem; 
        margin-top: 10px; 
        color: #941110; 
    }

    .flip-card-front {
        position: relative; 
    }
    // FINE OSCURAMENTO CARD //

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

        p {
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