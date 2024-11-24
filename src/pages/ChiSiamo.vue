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
      <div class="container">
        <!-- Intestazione -->
        <div class="row">
          <div class="col my-5 text-center">
            <h2>Chi siamo</h2>
          </div>
        </div>
        <!-- Testo introduttivo -->
        <div class="row">
          <div class="col my-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione aliquid accusantium exercitationem in placeat iste repudiandae molestiae perspiciatis eaque.
            </p>
          </div>
        </div>
        <!-- Iterazione sui membri del team -->
        <div v-for="(adminItem, index) in admin" :key="adminItem.key" class="row mb-5 align-items-center" :class="{'flex-row-reverse': index % 2 !== 0}"
        >
          <!-- Immagine -->
          <div class="col-md-3 text-center">
            <img :src="adminItem.foto" alt="Foto di {{adminItem.nome}} {{adminItem.cognome}}" class="img-fluid rounded-circle shadow"/>
          </div>
          <!-- Descrizione -->
          <div class="col-md-9">
            <h3 class="text-danger">{{ adminItem.nome }} {{ adminItem.cognome }}</h3>
            <p>{{ adminItem.descrizione }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>

<style scoped>
    #chi-siamo {
    background-color: #f9f9f9;
    padding: 40px 0;
    }

    h2 {
    font-weight: bold;
    }

    p {
    text-align: justify;
    }

    .img-fluid {
    max-width: 100%;
    height: auto;
    }

    .shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>