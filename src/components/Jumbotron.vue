<script>
export default {
    name: 'Jumbotron',
};
</script>

<template>
    <section id="jumbotron">
        <div class="container-fluid">
            <img class="jumbotron-img" src="https://www.arcidiocesigaeta.it/wp-content/uploads/sites/2/2024/02/05/festa-giovani-coriandoli-musica-concerto.jpg" alt="Dracarys">
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