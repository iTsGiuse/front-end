<script>
import NeveHeader from '../../assets/images/Header/Neve-Header.jpg';

export default {
    name: 'Jumbotron',
    data() { 
        return { 
            NeveHeader 
        }; 
    }
};
</script>

<template>
    <section id="jumbotron">
        <div class="container-fluid">
            <img class="jumbotron-img" :src="NeveHeader" alt="Dracarys">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #jumbotron {
        .container-fluid {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px !important;
        }

        .jumbotron-img {
            width: 100%;
            max-height: 40vh; 
            object-fit: cover; 
        }
    }
</style>