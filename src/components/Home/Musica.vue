<template>
    <section id="music-dj" class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="section-title text-danger">Musica & DJ</h2>
        <p class="lead text-muted">Scopri chi sono i DJ che faranno scatenare la pista da ballo!</p>
        <div class="row">
          <div v-for="(dj, index) in djs" :key="index" class="col-md-4 mb-4">
            <div class="card">
              <img :src="dj.image" class="card-img-top" alt="DJ" />
              <div class="card-body">
                <h5 class="card-title">{{ dj.name }}</h5>
                <p class="card-text">{{ dj.bio }}</p>
                <a :href="dj.socialLink" class="btn btn-danger" target="_blank">Segui su Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        djs: [
          { name: 'DJ Marco', bio: 'DJ e producer con oltre 10 anni di esperienza', image: '/assets/images/dj_marco.jpg', socialLink: 'https://instagram.com/djmarco' },
          { name: 'DJ Anna', bio: 'Specializzata in musica elettronica e house', image: '/assets/images/dj_anna.jpg', socialLink: 'https://instagram.com/djanna' },
          { name: 'DJ Luca', bio: 'Ritmi irresistibili per ogni tipo di evento', image: '/assets/images/dj_luca.jpg', socialLink: 'https://instagram.com/djluca' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #music-dj .card {
    border-radius: 1rem;
    overflow: hidden;
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  .card-body {
    padding: 1.5rem;
  }
  </style>