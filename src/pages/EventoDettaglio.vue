<script>
import events from '../assets/Js/events';

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
      const eventoLink = this.$route.params.eventoLink;
      this.eventoItem = events.find(item => item.link === eventoLink) || {};
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>

<template>
  <section id="evento-dettaglio" class="py-5 bg-light">
    <div class="container">
      <!-- Event Title and Back Button -->
      <div class="row align-items-center mb-4">
        <div class="col-lg-6">
          <h1 class="display-4 font-weight-bold text-danger">{{ eventoItem.title }}</h1>
        </div>
        <div class="col-lg-6 text-lg-end">
          <router-link class="btn btn-outline-danger" to="/eventi">Torna agli eventi</router-link>
        </div>
      </div>

      <!-- Event Image and Description (Image on the left, content on the right) -->
      <div class="row mb-5">
        <!-- Image on the left -->
        <div class="col-md-4">
          <div class="image-article">
            <img :src="eventoItem.src" alt="Locandina {{ eventoItem.title }}" class="img-fluid rounded shadow-sm">
          </div>
        </div>

        <!-- Content on the right -->
        <div class="col-md-8">
          <p class="lead">
            {{ eventoItem.description || 'Questa è una festa indimenticabile, con una vasta gamma di attività, giochi e intrattenimento per tutti. Preparati a vivere un’esperienza unica!' }}
          </p>
          <h5><strong>Data e Orario:</strong> {{ eventoItem.date }} | {{ eventoItem.dateStart }} - {{ eventoItem.dateEnd }}</h5>
          <h5><strong>Ospite:</strong> {{ eventoItem.host }} - L'ospite è il cuore pulsante dell'evento, che renderà questa serata ancora più speciale!</h5>
          <h5><strong>Età richiesta:</strong> {{ eventoItem.età }} - La serata è pensata per un pubblico di tutte le età, ma con un'attenzione particolare per gli adulti.</h5>
          <h5><strong>Dress Code:</strong> {{ eventoItem.dressCode }} - Siamo entusiasti di vedere tutti vestiti secondo il nostro tema elegante e sofisticato!</h5>
          
          <!-- Servizi Offerti Section -->
          <div v-if="eventoItem.services && eventoItem.services.length" class="row mt-4 pt-4">
            <div class="col-12">
              <h4 class="mb-3">Servizi Offerti:</h4>
              <div class="row">
                <div class="col-md-6" v-if="eventoItem.services.length > 3">
                  <ul class="list-unstyled">
                    <li v-for="(service, index) in eventoItem.services.slice(0, Math.ceil(eventoItem.services.length / 2))" :key="index">
                      <i class="fas fa-check-circle text-success"></i> {{ service }} - Un'esperienza completa e comoda per tutti i partecipanti.
                    </li>
                  </ul>
                </div>
                <div class="col-md-6" v-if="eventoItem.services.length > 3">
                  <ul class="list-unstyled">
                    <li v-for="(service, index) in eventoItem.services.slice(Math.ceil(eventoItem.services.length / 2))" :key="index">
                      <i class="fas fa-check-circle text-success"></i> {{ service }} - Tutto ciò di cui hai bisogno per una serata senza pensieri.
                    </li>
                  </ul>
                </div>
                <div class="col-md-12" v-else>
                  <ul class="list-unstyled">
                    <li v-for="(service, index) in eventoItem.services" :key="index">
                      <i class="fas fa-check-circle text-success"></i> {{ service }} - Un'esperienza completa e comoda per tutti i partecipanti.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Giochi Section -->
          <div v-if="eventoItem.gamesName && eventoItem.gamesName.length" class="row mt-4">
            <div class="col-12">
              <h4 class="mb-3">Giochi Disponibili:</h4>
              <div v-if="eventoItem.gamesName.length > 2" class="row">
                <!-- Prima colonna -->
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li v-for="(game, index) in eventoItem.gamesName.slice(0, Math.ceil(eventoItem.gamesName.length / 2))" :key="index">
                      <i class="fas fa-gamepad text-primary"></i> {{ game }} 
                    </li>
                  </ul>
                </div>
                <!-- Seconda colonna -->
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li v-for="(game, index) in eventoItem.gamesName.slice(Math.ceil(eventoItem.gamesName.length / 2))" :key="index">
                      <i class="fas fa-gamepad text-primary"></i> {{ game }} 
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Se solo due giochi o meno, li mostra tutti in una sola colonna -->
              <div v-else>
                <ul class="list-unstyled">
                  <li v-for="(game, index) in eventoItem.gamesName" :key="index">
                    <i class="fas fa-gamepad text-primary"></i> {{ game }} 
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- DJ Section -->
          <div v-if="eventoItem.dj" class="row mt-4">
            <div class="col-12">
              <h4 class="mb-3">DJ della serata:</h4>
              <p><strong>{{ eventoItem.dj }}</strong> - Il nostro DJ di fiducia suonerà i migliori successi della scena musicale per farti ballare tutta la notte!</p>
            </div>
          </div>

          <!-- TAGS -->
          <div class="tags my-3">
            <span v-for="(tag, index) in eventoItem.tags" :key="index" class="badge rounded-pill" :style="{ backgroundColor: getRandomColor() }">
              {{ tag }}
            </span>
          </div>

          <!-- FEEDBACK -->
          <div class="feedback-section my-3" v-if="eventoItem.feedback && eventoItem.feedback.length > 0">
            <h5 class="mb-3">Feedback del Partecipante:</h5>
            <button class="btn btn-outline-danger">
              <a 
                :href="eventoItem.feedback" 
                target="_blank" 
                class="text-danger text-decoration-none"
              >
                Vai alla Recensione
              </a>
            </button>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #evento-dettaglio {
    background-color: #f8f9fa;
  }

  h1.display-4 {
    font-size: 2.5rem;
    color: #2c3e50;
  }

  h5 {
    font-weight: 600;
    color: #34495e;
  }

  ul.list-unstyled li {
    font-size: 1.1rem;
  }

  .fas {
    margin-right: 8px;
  }
</style>