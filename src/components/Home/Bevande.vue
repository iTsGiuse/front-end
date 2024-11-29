<template>
    <section id="food-beverages" class="py-5">
      <div class="container text-center">
        <h2 class="section-title text-danger">Cibo & Bevande</h2>
        <p class="lead text-muted">Ecco cosa troverai al nostro prossimo evento!</p>
        <div class="row">
          <div v-for="(item, index) in menuItems" :key="index" class="col-md-4 mb-4">
            <div class="card">
              <img :src="item.image" class="card-img-top" alt="Food Item" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <span class="badge bg-danger">{{ item.price }}</span>
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
        menuItems: [
          { name: 'Pasta alla Carbonara', description: 'Pasta fresca con pancetta, uova e pecorino.', price: '€12', image: '/assets/images/pasta_carbonara.jpg' },
          { name: 'Pizza Margherita', description: 'Pizza con pomodoro, mozzarella e basilico.', price: '€8', image: '/assets/images/pizza_margherita.jpg' },
          { name: 'Cocktail Spritz', description: 'Un aperitivo perfetto per ogni evento.', price: '€6', image: '/assets/images/spritz.jpg' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #food-beverages .card {
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