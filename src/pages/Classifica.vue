<script>
import CalcoloBottiglie from '../components/CalcoloBottiglie.vue';

export default {
    name: 'Classifica',
    components: {
        CalcoloBottiglie
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
        </div>
        <CalcoloBottiglie></CalcoloBottiglie>
    </section>
</template>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: auto;
    }
</style>

<!-- <script>

/* QUANTITA A TESTA */
const acquaTesta= 0,50l ;
const birraTesta= 0,50l;
const shottinoTesta= 15cl ;
const analcoliciTesta= 0,60l;
/* spritz */
const aperolTesta= 3l;
const proseccoTesta= 4cl ;
const sodaTesta= 2cl;

/* QUANTITA NECESSARIE */
/* x shot */
const montenegroShot=3,75cl;
const jegerShot=3,75cl;
const limoncinoShot=3,75cl;
const vodkaZuccShot=3,75cl;
/* x birra */
const paulaner: 0,25l;
const heineken: 0,25l;

/* QUANTITA' BOTTIGLIE */
/* SHOT */
const montenegroBottiglia= 70cl;
const jegerBottiglia= 70cl;
const limoncinoBottiglia= 70cl;
const vodkaBottiglia= 70cl;
/* DRINK */
const rumBottiglia= 70cl;
const ginBottiglia= 70cl;
const vodkaBottiglia= 70cl;
/* ANALCOLICI */
const tonicaBottiglia= 1l;
const lemonBottiglia= 1l;
const succoPeraBottiglia= 1l;



</script> -->