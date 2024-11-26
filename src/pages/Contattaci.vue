<template>
  <section id="Contattaci">
    <div class="container my-5">
      <div class="text-center">
        <h2 class="my-3">Contattaci</h2>
        <p class="lead">Benvenuti alla nostra pagina di contatto! Siamo qui per aiutarti con qualsiasi domanda, commento o suggerimento tu possa avere. Siamo lieti di assisterti e ci impegniamo a rispondere entro 24 ore.</p>
        <p class="lead">Il nostro team è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00. Se hai bisogno di assistenza immediata, puoi chiamarci al numero 123-456-7890.</p>
      </div>

      <div class="text-center mt-5">
        <label for="contact-reason" class="form-label">Seleziona il motivo del contatto:</label>
        <select v-model="selectedOption" @change="updateForm" class="form-select" id="contact-reason">
          <option disabled value="">Seleziona un'opzione</option>
          <option value="general">Informazioni Generali</option>
          <option value="technical">Supporto Tecnico</option>
          <option value="suggestions">Suggerimenti</option>
          <option value="collaboration">Vuoi collaborare con noi?</option>
        </select>
      </div>

      <!-- Descrizione delle Opzioni -->
      <div v-if="!selectedOption" class="text-center mt-5">
        <h3 class="section-title">Come possiamo aiutarti?</h3>
        <p class="section-desc">Scegli un'opzione dal menu a tendina sopra per vedere il modulo di contatto appropriato.</p>
        <p class="section-desc">Selezionando "Informazioni Generali", potrai inviare domande generali riguardanti i nostri servizi, orari di apertura, e altre informazioni.</p>
        <p class="section-desc">Se hai bisogno di "Supporto Tecnico", seleziona questa opzione e compila il modulo con i dettagli del problema tecnico.</p>
        <p class="section-desc">Hai un "Suggerimento"? Condividilo con noi per aiutarci a migliorare.</p>
        <p class="section-desc">Vuoi "Collaborare con noi"? Scrivici per esplorare opportunità di collaborazione.</p>
      </div>

      <!-- Form Generale -->
      <form v-if="selectedOption === 'general'" action="//" method="POST" class="shadow p-4 mt-4 bg-white rounded">
        <input type="hidden" name="contact-reason" value="general">
        <div class="form-group row my-3 mt-5">
          <label for="general-name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="general-name" name="name" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="general-email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="general-email" name="email" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="general-message" class="col-sm-2 col-form-label">Messaggio</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="general-message" name="message" rows="5" required></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger my-3">Invia</button>
        </div>
      </form>

      <!-- Form Supporto Tecnico -->
      <form v-if="selectedOption === 'technical'" action="//" method="POST" class="shadow p-4 my-4 bg-white rounded">
        <input type="hidden" name="contact-reason" value="technical">
        <div class="form-group row my-3 mt-5">
          <label for="tech-name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="tech-name" name="name" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="tech-email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="tech-email" name="email" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="tech-issue" class="col-sm-2 col-form-label">Problema Tecnico</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="tech-issue" name="message" rows="5" required></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger my-3">Invia</button>
        </div>
      </form>


      <!-- Form Suggerimenti -->
      <form v-if="selectedOption === 'suggestions'" action="//" method="POST" class="shadow p-4 my-4 bg-white rounded">
        <input type="hidden" name="contact-reason" value="suggestions">
        <div class="form-group row my-3 mt-5">
          <label for="suggestions-name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="suggestions-name" name="name" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="suggestions-email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="suggestions-email" name="email" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="suggestions-message" class="col-sm-2 col-form-label">Suggerimento</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="suggestions-message" name="message" rows="5" required></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger my-3">Invia</button>
        </div>
      </form>

      <!-- Form Collaborazione -->
      <form v-if="selectedOption === 'collaboration'" action="//" method="POST" class="shadow p-4 my-4 bg-white rounded">
        <input type="hidden" name="contact-reason" value="collaboration">
        <div class="form-group row my-3 mt-5">
          <label for="collaboration-name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="collaboration-name" name="name" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="collaboration-email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="collaboration-email" name="email" required>
          </div>
        </div>
        <div class="form-group row my-3">
          <label for="collaboration-message" class="col-sm-2 col-form-label">Messaggio</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="collaboration-message" name="message" rows="5" required></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger my-3">Invia</button>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: ''
    };
  },
  methods: {
    updateForm() {
      // Logica aggiuntiva per aggiornare il form, se necessario
    }
  }
};
</script>

<style scoped lang="scss">
  #Contattaci {
    .container {
      max-width: 900px;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #dc3545;
    }

    .lead {
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.1rem;
      color: #6c757d;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      color: #343a40;
      margin-top: 30px;
    }

    .section-desc {
      text-align: center;
      font-size: 1rem;
      color: #6c757d;
      margin-bottom: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }

      .col-form-label {
        margin-bottom: 5px;

        @media (min-width: 768px) {
          margin-bottom: 0;
          text-align: right;
        }
      }

      .form-control {
        border-radius: 0.25rem;
      }
    }

    .btn-danger {
      background-color: #dc3545;
      border-color: #dc3545;
      padding: 10px 20px;
      font-size: 1.1rem;
      transition: background-color 0.3s, border-color 0.3s;

      &:hover {
        background-color: #c82333;
        border-color: #bd2130;
      }
    }

    .shadow {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .rounded {
      border-radius: 0.5rem;
    }

    .form-select {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
</style>

