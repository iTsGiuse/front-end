<script>
import ImageMission from '../../assets/images/ChiSiamo/Mission-ChiSiamo.png';

export default {
    name: 'Team',
    data() {
        return {
            admin,
            ImageMission
        };
    }
};
</script>

<template>
    <section id="mission">
        <div class="mission-section">
            <div class="text-content container text-center text-light">
                <h3 class="text-primary">La Nostra Missione: Creare Esperienze da Vivere</h3>
                <p>
                    Ogni evento è un'opportunità per creare qualcosa di speciale. Uniamo passione, stile e creatività per trasformare ogni momento in un'esperienza straordinaria.
                </p>
                <ul>
                    <li><i class="fas fa-star text-warning"></i> Eventi personalizzati che ti raccontano</li>
                    <li><i class="fas fa-star text-warning"></i> Il nostro team è la tua garanzia di qualità</li>
                    <li><i class="fas fa-star text-warning"></i> Innovazione che supera ogni aspettativa</li>
                </ul>
            </div>
            <img :src="ImageMission" alt="Missione" class="img-fluid rounded shadow-lg">
        </div>
    </section>
</template>

<style scoped lang="scss">
#mission {
    .mission-section {
        position: relative;
        height: 100vh;
        background: url('https://via.placeholder.com/800x600') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;
    }

    .text-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: bold;
    }

    p {
        font-size: 1.25rem;
        color: #ccc;
        margin-top: 20px;
    }

    ul {
        margin-top: 20px;
        list-style-type: none;
        padding-left: 0;
    }

    ul li {
        font-size: 1.15rem;
        color: #fff;
        margin-bottom: 10px;
    }

    img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 1;
        object-fit: cover;
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 2rem;
        }

        p, ul li {
            font-size: 1rem;
        }
    }
}
</style>