<template>
    <section id="register" class="py-5 bg-danger text-white">
      <div class="container text-center">
        <h2 class="section-title">Registrati per l'Evento</h2>
        <p class="lead">Compila il modulo per partecipare alla festa!</p>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" id="name" class="form-control" v-model="form.name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" v-model="form.email" required />
          </div>
          <div class="mb-3">
            <label for="guests" class="form-label">Numero di Ospiti</label>
            <input type="number" id="guests" class="form-control" v-model="form.guests" required min="1" />
          </div>
          <button type="submit" class="btn btn-light">Registrati</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          guests: 1
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted', this.form);
        // Qui puoi inviare i dati del form a un server o un'API
        alert('Registrazione completata!');
        this.form = { name: '', email: '', guests: 1 };  // Reset form
      }
    }
  };
  </script>
  
  <style scoped>
  #register {
    border-radius: 1rem;
  }
  #register .form-control {
    border-radius: 1rem;
  }
  </style>