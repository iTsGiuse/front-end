<template>
  <div>
    <!-- Mostra la schermata iniziale se il gioco non è iniziato -->
    <SchermataIniziale v-if="!gameStarted" :startGame="startGame" />
    
    <!-- Mostra il gioco se il gioco è iniziato -->
    <Gioco v-else :players="players" :gameOver="gameOver" @endGame="endGame" />
    
    <!-- Mostra la schermata finale quando il gioco è finito -->
    <SchermataFinale v-if="gameOver" :players="players" />
  </div>
</template>

<script>
import { ref } from 'vue';
import SchermataIniziale from './OcaComponenti/SchermataIniziale.vue';
import Gioco from './OcaComponenti/Gioco.vue';
import SchermataFinale from './OcaComponenti/SchermataFinale.vue';

export default {
  components: {
    SchermataIniziale,
    Gioco,
    SchermataFinale,
  },
  setup() {
    const gameStarted = ref(false);
    const gameOver = ref(false);
    const players = ref([]);

    // Funzione per iniziare il gioco con i giocatori passati dalla schermata iniziale
    const startGame = (newPlayers) => {
      players.value = newPlayers;
      gameStarted.value = true;
      gameOver.value = false;
    };

    // Funzione per terminare il gioco e mostrare la schermata finale
    const endGame = () => {
      gameOver.value = true;
    };

    return { startGame, endGame, players, gameStarted, gameOver };
  },
};
</script>