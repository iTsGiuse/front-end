<script>
    import events from '../../events';

    export default {
        data() {
            return {
                events,
            };
        },
        computed: {
            upcomingEvents() {
                const today = new Date();
                return this.events.filter(event => new Date(event.date) >= today);
            },
            pastEvents() {
                const today = new Date();
                return this.events.filter(event => new Date(event.date) < today);
            },
            sortedUpcomingEvents() {
                return this.upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            },
            sortedPastEvents() {
                return this.pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
            },
        },
        methods: {
            checkEventStatus(eventDate) {
                const today = new Date();
                const event = new Date(eventDate);
                const threeWeeksBefore = new Date(event);
                threeWeeksBefore.setDate(event.getDate() - 21); 
                const daysDiff = Math.ceil((threeWeeksBefore - today) / (1000 * 60 * 60 * 24));
                
                const isDisabled = daysDiff > 0; 
                return {
                    isDisabled,
                    daysUntilUnlock: daysDiff > 0 ? daysDiff : 0, 
                };
            },
            divideServices(services) {
                const middle = Math.floor(services.length / 2); // Ritorna più elementi a sinistra
                return [services.slice(0, middle + 1), services.slice(middle + 1)];
            }
        },
    };
</script>

<template>
    <section id="eventi">
        <!-- Sezione In Arrivo -->
        <div v-if="sortedUpcomingEvents.length" class="container my-5">
            <h1 class="title mb-5">Eventi</h1>
            <h3 class="">In Arrivo:</h3>
            <div class="d-flex justify-content-start flex-wrap">
                <div
                    v-for="evento in sortedUpcomingEvents"
                    :key="evento.key"
                    class="flip-card m-3"
                    :class="{ 'disabled-card': checkEventStatus(evento.date).isDisabled }"
                >
                    <div class="flip-card-inner">
                        <!-- Fronte della Card -->
                        <div class="flip-card-front card">
                            <img :src="evento.src" class="card-img-top" :alt="evento.title" />
                            <div v-if="checkEventStatus(evento.date).isDisabled" class="overlay">
                                <div class="text-center">
                                    <i class="fas fa-hourglass-half"></i>
                                    <p class="countdown" v-if="checkEventStatus(evento.date).daysUntilUnlock > 0">
                                        {{ checkEventStatus(evento.date).daysUntilUnlock }} giorni rimanenti
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Retro della Card -->
                        <div class="flip-card-back card-body text-center">
                            <h2 class="card-title mb-4">{{ evento.title }}</h2>
                            <p class="card-text">{{ evento.description }}</p>
                            <p class="card-text"><strong>Data:</strong> {{ evento.date }}</p>
                            <div class="services-container" v-if="evento.services.length > 5">
                                <ul class="service-list">
                                    <li v-for="service in divideServices(evento.services)[0]" :key="service"><strong>{{ service }}</strong></li>
                                </ul>
                                <ul class="service-list">
                                    <li v-for="service in divideServices(evento.services)[1]" :key="service"><strong>{{ service }}</strong></li>
                                </ul>
                            </div>
                            <ul v-else>
                                <li v-for="service in evento.services" :key="service"><strong>{{ service }}</strong></li>
                            </ul>
                            <router-link v-if="!checkEventStatus(evento.date).isDisabled" class="btn btn-danger" :to="{ name: 'evento', params: { eventoLink: evento.link } }">Scopri info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione Eventi Passati -->
        <div v-if="sortedPastEvents.length" class="container my-5">
            <h3>Eventi Passati:</h3>
            <div class="d-flex justify-content-start flex-wrap">
                <div v-for="evento in sortedPastEvents" :key="evento.key" class="flip-card m-3">
                    <div class="flip-card-inner">
                        <!-- Fronte della Card -->
                        <div class="flip-card-front card">
                            <img :src="evento.src" class="card-img-top" :alt="evento.title" />
                        </div>
                        <!-- Retro della Card -->
                        <div class="flip-card-back card-body text-center">
                            <h2 class="card-title mb-4">{{ evento.title }}</h2>
                            <p class="card-text">{{ evento.description }}</p>
                            <p class="card-text"><strong>Data:</strong> {{ evento.date }}</p>
                            <div class="services-container" v-if="evento.services.length > 5">
                                <ul class="service-list">
                                    <li v-for="service in divideServices(evento.services)[0]" :key="service"><strong>{{ service }}</strong></li>
                                </ul>
                                <ul class="service-list">
                                    <li v-for="service in divideServices(evento.services)[1]" :key="service"><strong>{{ service }}</strong></li>
                                </ul>
                            </div>
                            <ul v-else>
                                <li v-for="service in evento.services" :key="service"><strong>{{ service }}</strong></li>
                            </ul>
                            <router-link class="btn btn-danger mt-3" :to="{ name: 'evento', params: { eventoLink: evento.link } }">Scopri info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
#eventi {
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

    .flip-card {
        width: 380px;
        height: 470px;
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
    .services-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;


    }

    .service-list {
            margin: 0;
            padding: 0;
            width: 45%; 
            list-style-position: inside; 
            list-style-type: disc;
        }
}
</style>