<script>
import  OcaAlcolico from '../components/Games/OcaAlcolico.vue'
import GestioneQuantità from '../components/GestioneQuantità.vue';
import Sconti from '../components/Sconti.vue';

export default {
    name: 'Classifica',
    components: {
        OcaAlcolico,
        GestioneQuantità,
        Sconti
    }
}
</script>

<template>
    <section id="classifica">
        <div class="container">
            <div class="row">
                <div class="col my-5">
                    <h2>Classifica</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col my-5 text-center">
                    <img src="https://www.latobmilano.it/wp-content/uploads/2023/04/formazione-lavoro-2023-lato-b-milano-FB.jpg" alt="Work in Progress" class="img-fluid" style="max-width: 500px;">
                </div>
            </div>
            <OcaAlcolico></OcaAlcolico>
            <GestioneQuantità></GestioneQuantità>
            <Sconti></Sconti>
        </div>

        
    </section>
</template>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: auto;
    }
</style>