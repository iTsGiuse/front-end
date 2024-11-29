<template>
    <section id="mission" class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col">
            <h2 class="section-title text-gradient">La Nostra Passione</h2>
            <h4 class="lead-highlight text-muted">Le feste non sono solo eventi, sono esperienze che ci uniscono!</h4>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="mission-content bg-gradient p-4 rounded-xl shadow-2xl py-5">
              <p class="highlight mb-4">
                Noi non creiamo feste per altri. Le nostre feste sono esperienze pensate per divertirci insieme, per celebrare la vita, l'amicizia e la comunità. Ogni evento che organizziamo è una fusione di gioia, risate e momenti indimenticabili.
              </p>
              <div class="row">
                <!-- Feature Items -->
                <div class="col-12 col-md-6 col-lg-4 mb-5" v-for="item in featureItems" :key="item.title">
                  <div class="feature-item text-center">
                    <i :class="`fas fa-${item.icon} fa-3x text-gradient mb-3`"></i>
                    <h5 class="font-weight-bold">{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>
    
<script>
    export default {
      name: 'Mission',
      data() {
        return {
          featureItems: [
            { icon: 'cocktail', title: 'Festa come arte', description: 'Ogni evento è pensato come una tela su cui dipingere sorrisi, musica e divertimento.' },
            { icon: 'music', title: "Musica per l'anima", description: 'La musica è il cuore pulsante di ogni festa. Ogni battito è un invito a ballare!' },
            { icon: 'smile', title: 'Divertimento senza limiti', description: 'Ogni festa è pensata per liberarci dalle convenzioni e vivere il momento con spensieratezza.' },
            { icon: 'fire', title: 'Energia contagiosa', description: 'La nostra energia è la scintilla che fa brillare ogni evento, coinvolgendo tutti i partecipanti.' },
            { icon: 'heart', title: 'Unione e amicizia', description: 'Le nostre feste sono il luogo ideale per creare legami e rafforzare amicizie vere.' },
            { icon: 'camera', title: 'Ricordi immortalati', description: 'Ogni evento è un\'opportunità per creare ricordi indimenticabili, immortalati in ogni scatto.' }
          ]
        };
      }
    };
</script>

<style scoped lang="scss">
#mission {
  background: #D9D9D9;
  padding-top: 6rem;
  padding-bottom: 6rem;

  .section-title {
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    background: -webkit-linear-gradient(45deg, #ff6a00, #e63946);
    display: inline;
  }

  .lead-highlight {
    font-size: 1.5rem;
    color: #f1f1f1;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .mission-content {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .highlight {
    font-size: 1.5rem;
    line-height: 2;
    color: #333;
    font-weight: 600;
    padding: 1rem 2rem;
    background: #fffbe6;
    border-left: 5px solid #ff6a00;
  }

  .row {
    margin-top: 2rem;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #f8f9fa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    height: 100%;
    min-height: 300px;
    opacity: 0;
    transform: translateY(50px);
    animation: fadeIn 0.6s ease-out forwards;
  }

  .feature-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  i {
    color: #ff6a00;
    transition: transform 0.3s ease;
  }

  .feature-item:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }

  .feature-item:hover i {
    transform: scale(1.2);
    color: #e63946;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: 768px) {
  #mission {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .section-title {
    font-size: 2.3rem;
  }

  .lead-highlight {
    font-size: 1.3rem;
  }

  .mission-content {
    padding: 1.5rem;
  }

  .highlight {
    font-size: 1.25rem;
    line-height: 1.8;
  }

  .feature-item {
    padding: 1rem;
    min-height: auto;
  }

  .feature-item h5 {
    font-size: 1.1rem;
  }

  .feature-item p {
    font-size: 0.95rem;
  }
}
</style>

    