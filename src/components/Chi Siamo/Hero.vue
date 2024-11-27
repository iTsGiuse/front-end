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
<section id="hero">
    <div class="hero-section text-center text-light d-flex align-items-center">
        <img :src="ImageHero" alt="Hero Chi Siamo" class="hero-image">
        <div class="container">
            <h1 class="display-4">Chi Siamo</h1>
            <p class="lead">Il nostro viaggio e la nostra missione.</p>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
#hero {
    .hero-section {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-align: center;
    }
    
    .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -100;
    }

    h1 {
        font-size: 4rem;
        font-weight: bold;
        z-index: 100;
    }

    .lead {
        font-size: 1.25rem;
        color: #ccc;
        z-index: 100;
    }

    /* Media Queries per Responsività */
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
