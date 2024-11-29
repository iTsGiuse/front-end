<script>
import ImageHero from "../../assets/images/ChiSiamo/Hero-ChiSiamo.png";

export default {
    name: 'Hero',
    data() {
        return {
            ImageHero
        }
    }
};
</script>

<template>
    <section id="hero" class="hero-section text-center text-light d-flex align-items-center">
        <div class="container">
            <h1 class="display-4">Chi Siamo</h1>
            <p class="lead">Il nostro viaggio e la nostra missione.</p>
        </div>
    </section>
</template>
    

<style scoped lang="scss">
#hero {
    background-color: #941110; 
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    .container {
        color: #F9F9F9; 
        z-index: 1;
    }

    h1 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .lead {
        font-size: 1.25rem;
        color: #F9F9F9; 
    }

    
    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .lead {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 2rem;
        }

        .lead {
            font-size: 0.875rem;
        }
    }
}
</style>
