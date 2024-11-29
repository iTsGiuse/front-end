<template>
    <section id="testimonials" class="py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col">
            <h2 class="section-title text-danger">Cosa dicono di noi</h2>
            <h4 class="lead text-muted">Le parole dei nostri clienti</h4>
          </div>
        </div>
        <div class="row">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="col-12 col-md-4 mb-4">
            <div class="testimonial-card bg-white p-4 rounded shadow">
              <p class="lead">"{{ testimonial.text }}"</p>
              <h5 class="text-danger">{{ testimonial.name }}</h5>
              <p class="text-muted">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Testimonials',
    data() {
      return {
        testimonials: [
          { text: 'Un servizio straordinario! Consigliatissimi.', name: 'Luca Rossi', position: 'CEO, XYZ Corp.' },
          { text: 'Un’esperienza indimenticabile. Ci torneremo sicuramente.', name: 'Giulia Bianchi', position: 'Marketing Director' },
          { text: 'Organizzazione impeccabile, divertimento assicurato.', name: 'Marco Verdi', position: 'Event Planner' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonial-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .testimonial-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  </style>