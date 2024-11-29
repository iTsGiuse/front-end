<script>
    import Jumbotron from '../components/Home/Jumbotron.vue';
    import News from '../components/Home/News.vue';
    import Musica from '../components/Home/Musica.vue';
    import ModuloRegistrazione from '../components/Home/ModuloRegistrazione.vue';
    import Partner from '../components/Home/Partner.vue';
    import Testimonials from '../components/Home/Testimonials.vue';
    import Bevande from '../components/Home/Bevande.vue';


    export default {
        name: 'Home',
        components: {
            Jumbotron,
            News,
            Musica,
            Bevande,
            Partner,
            Testimonials,
            ModuloRegistrazione
        }
    };
</script>
<template>

    <Jumbotron></Jumbotron>
    <News></News>
    <Musica></Musica>
    <Bevande></Bevande>
    <Partner></Partner>
    <Testimonials></Testimonials>
    <ModuloRegistrazione></ModuloRegistrazione>
    
</template>

<style scoped lang="scss">
    
</style>