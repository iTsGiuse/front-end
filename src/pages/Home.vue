<script>
    import Jumbotron from '../components/Jumbotron.vue';
    import News from '../components/News.vue';

    export default {
        name: 'Home',
        components: {
            Jumbotron,
            News
        }
    };
</script>
<template>

    <Jumbotron></Jumbotron>
    <News></News>
    
</template>

<style scoped lang="scss">
    
</style>