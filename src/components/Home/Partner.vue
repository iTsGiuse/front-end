<template>
    <section id="partners" class="py-5">
      <div class="container text-center">
        <h2 class="section-title text-danger">I Nostri Partner</h2>
        <p class="lead text-muted">Siamo felici di collaborare con questi fantastici partner per i nostri eventi.</p>
        <div class="row">
          <div v-for="(partner, index) in partners" :key="index" class="col-md-4 mb-4">
            <img :src="partner.logo" alt="Partner Logo" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        partners: [
          { name: 'Partner 1', logo: '/assets/images/partner1-logo.png' },
          { name: 'Partner 2', logo: '/assets/images/partner2-logo.png' },
          { name: 'Partner 3', logo: '/assets/images/partner3-logo.png' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #partners img {
    max-height: 100px;
    object-fit: contain;
  }
  </style>