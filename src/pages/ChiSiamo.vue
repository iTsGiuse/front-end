<script>
import admin from '../../admin';

export default {
    name: 'ChiSiamo',
    data() {
        return {
            admin
        };
    }
};
</script>

<template>
  <section id="chi-siamo">
      <!-- Sezione Hero -->
      <div class="hero-section text-center text-light d-flex align-items-center" style="background-image: url('https://via.placeholder.com/1920x1080');">
          <div class="container">
              <h1 class="display-4">Chi Siamo</h1>
              <p class="lead">Il nostro viaggio e la nostra missione.</p>
          </div>
      </div>
      <!-- Sezione Descrizione Chi siamo -->
      <div class="container my-5">
          <div class="row">
              <div class="col-lg-6">
                  <h3>La Nostra Missione</h3>
                  <p>
                      Siamo un gruppo di professionisti appassionati che lavorano insieme per fornire soluzioni innovative e di alta qualità. Il nostro obiettivo è superare le aspettative dei nostri clienti e fare la differenza nel nostro settore.
                  </p>
              </div>
              <div class="col-lg-6">
                  <img src="https://via.placeholder.com/600x400" alt="La nostra missione" class="img-fluid rounded shadow"/>
              </div>
          </div>
      </div>
      <!-- Sezione Membri del Team -->
      <div class="container my-5">
          <div class="row">
              <div class="col text-center mb-5">
                  <h3>Il Nostro Team</h3>
                  <p class="lead">Incontra i membri chiave del nostro team.</p>
              </div>
          </div>
          <div class="row">
              <div v-for="(adminItem, index) in admin" :key="adminItem.key" class="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                  <div class="card team-member shadow-lg">
                      <img :src="adminItem.foto" alt="Foto di {{adminItem.nome}} {{adminItem.cognome}}" class="card-img-top rounded-circle p-3">
                      <div class="card-body text-center">
                          <h4 class="card-title text-danger">{{ adminItem.nome }} {{ adminItem.cognome }}</h4>
                          <p class="card-text">{{ adminItem.descrizione }}</p>
                          <div class="social-icons mt-3">
                              <a :href="adminItem.linkedin" target="_blank" class="text-dark mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
                              <a :href="adminItem.twitter" target="_blank" class="text-dark mx-2"><i class="fab fa-twitter-square fa-2x"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

      <section id="chi-siamo">
    <div class="container">
        <!-- Intestazione -->
        <div class="row">
            <div class="col my-5 text-center">
                <h2>Chi siamo</h2>
            </div>
        </div>
        <!-- Testo introduttivo -->
        <div class="row">
            <div class="col-lg-8 mx-auto my-3">
                <p>
                    Siamo un team appassionato e dedicato, impegnato a fornire soluzioni di alta qualità. Con competenze che spaziano dal design alla programmazione, lavoriamo insieme per realizzare progetti che fanno la differenza.
                </p>
            </div>
        </div>
        <!-- Iterazione sui membri del team -->
        <div v-for="(adminItem, index) in admin" :key="adminItem.key" class="row mb-5 align-items-center" :class="{'flex-row-reverse': index % 2 !== 0}">
            <!-- Immagine -->
            <div class="col-12 col-md-4 text-center">
                <img :src="adminItem.foto" alt="Foto di {{adminItem.nome}} {{adminItem.cognome}}" class="img-fluid rounded-circle shadow-lg"/>
            </div>
            <!-- Descrizione -->
            <div class="col-12 col-md-8">
                <h3 class="text-danger">{{ adminItem.nome }} {{ adminItem.cognome }}</h3>
                <p>{{ adminItem.descrizione }}</p>
            </div>
        </div>
    </div>
</section>

<section id="chi-siamo">
    <div class="container">
        <!-- Intestazione -->
        <div class="row">
            <div class="col my-5 text-center">
                <h2>Chi siamo</h2>
            </div>
        </div>
        <!-- Testo introduttivo -->
        <div class="row">
            <div class="col-lg-8 mx-auto my-3">
                <p>
                    Siamo un team appassionato e dedicato, impegnato a fornire soluzioni di alta qualità. Con competenze che spaziano dal design alla programmazione, lavoriamo insieme per realizzare progetti che fanno la differenza.
                </p>
            </div>
        </div>
        <!-- Iterazione sui membri del team -->
        <div v-for="(adminItem, index) in admin" :key="adminItem.key" class="row mb-5 align-items-center" :class="{'flex-row-reverse': index % 2 !== 0}">
            <!-- Immagine -->
            <div class="col-12 col-md-4 text-center">
                <img :src="adminItem.foto" alt="Foto di {{adminItem.nome}} {{adminItem.cognome}}" class="img-fluid rounded-circle shadow-lg"/>
            </div>
            <!-- Descrizione -->
            <div class="col-12 col-md-8">
                <h3 class="text-danger">{{ adminItem.nome }} {{ adminItem.cognome }}</h3>
                <p>{{ adminItem.descrizione }}</p>
            </div>
        </div>
    </div>
</section>
  </template>

  <style scoped>
  #chi-siamo {
      padding: 0;
  }
  
  .hero-section {
      height: 100vh;
      background-size: cover;
      background-position: center;
  }
  
  h1 {
      font-weight: bold;
      font-size: 4rem;
  }
  
  .lead {
      font-size: 1.25rem;
      color: #ccc;
  }
  
  .card.team-member {
      background-color: #ffffff;
      border: none;
      transition: transform 0.3s ease;
  }
  
  .card.team-member:hover {
      transform: translateY(-10px);
  }
  
  .card-img-top {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
  }
  
  .card-title {
      font-size: 1.5rem;
      margin-top: 15px;
  }
  
  .card-text {
      font-size: 1rem;
      color: #777;
  }
  
  .social-icons a {
      color: #333;
      transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
      color: #007bff;
  }
  
  .contact-section {
      padding: 60px 0;
  }
  
  .contact-section .btn-primary {
      background-color: #007bff;
      border-color: #007bff;
  }
  
  /* Media Queries per Responsività */
  @media (max-width: 768px) {
      h1 {
          font-size: 2.5rem;
      }
  
      .lead {
          font-size: 1rem;
      }
  
      .card.team-member {
          margin-bottom: 30px;
      }
  
      .card-title {
          font-size: 1.25rem;
      }
  
      .card-text {
          font-size: 0.9rem;
      }
  }
  </style>
  