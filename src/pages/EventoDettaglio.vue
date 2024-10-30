<script>
import events from '../../events';

export default {
    name: 'EventoDettaglio',
    data() {
        return {
            eventoItem: {},
        };
    },
    created() {
        this.fetchEventoItem();
    },
    methods: {
        fetchEventoItem() {
            const eventoLink = this.$route.params.eventoLink; // Recupera il parametro dal router
            // Trova l'elemento corrispondente in events
            this.eventoItem = events.find(item => item.link === eventoLink) || {};
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
    <section id="evento-dettaglio">
        <div class="container">
            <div class="row">
                <div class="col-12 my-3">
                    <h1>{{ eventoItem.title }}</h1>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-4">
                    <div class="image-article">
                        <img :src="eventoItem.src" alt="{{ eventoItem.title }}" class="img-fluid">
                    </div>
                </div>
                <div class="col-8">
                    <p>{{ eventoItem.description }}</p>
                    <div class="tags">
                        <span v-for="(tag, index) in eventoItem.tags" :key="index" class="tag" :style="{ backgroundColor: getRandomColor() }">{{ tag }}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h5>Data: {{ eventoItem.date }}</h5>
                        <h5>Ospite: {{ eventoItem.host }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>