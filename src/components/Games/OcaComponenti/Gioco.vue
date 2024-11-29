<template>
  <div class="game-board">
    <h2>Gioco dell'Oca - Alcolico</h2>

    <!-- Visualizzazione del giocatore attivo sopra la mappa -->
    <div class="player-info">
      <h3>Turno del giocatore: <strong>{{ currentPlayer.name }}</strong></h3>
      <p>Posizione attuale: Casella {{ currentPlayer.position + 1 }}</p>
    </div>

    <!-- Riepilogo dei giocatori e delle loro posizioni -->
    <div class="player-status">
      <h3>Giocatori:</h3>
      <ul>
        <li v-for="(player, index) in players" :key="index">
          <strong>{{ player.name }}</strong>: Casella {{ player.position + 1 }}
        </li>
      </ul>
    </div>

    <!-- Mappa del Gioco dell'Oca Alcolico -->
    <div class="board">
      <div v-for="(cell, index) in board" :key="index" class="cell" :class="{'current-player': currentPlayer.position === index, 'special-cell': cell.special}">
        <span v-if="index === currentPlayer.position">{{ currentPlayer.name }}</span>
        <p v-if="cell.special">{{ cell.label }}</p>
        <p v-else>{{ index + 1 }}</p>
      </div>
    </div>

    <div class="controls">
      <button @click="rollDice" :disabled="gameOver">Lancia il Dado</button>
      <p v-if="diceRoll !== null">Dado: {{ diceRoll }}</p>
      <p v-if="diceRoll !== null">Posizione attuale di {{ currentPlayer.name }}: {{ currentPlayer.position + 1 }}</p>
    </div>

    <button @click="endGame" v-if="gameOver">Termina il gioco</button>
  </div>
</template>

<script>
export default {
  props: {
    players: Array,
    gameOver: Boolean,
  },
  data() {
    return {
      diceRoll: null,
      currentPlayerIndex: 0,
      board: [
        { label: "Partenza", special: false },
        { label: "Bevi un sorso", special: true },
        { label: "Avanza di 2 caselle", special: true },
        { label: "Bevi un cocktail", special: true },
        { label: "Inizia un mini gioco", special: true },
        { label: "Bevi un bicchiere di vino", special: true },
        { label: "Avanza di 3 caselle", special: true },
        { label: "Salta un turno", special: true },
        { label: "Torna alla casella di partenza", special: true },
        { label: "Bevi a volontà", special: true },
        { label: "Inizia una gara di drink", special: true },
        { label: "Traguardo", special: false },
      ],
    };
  },
  computed: {
    currentPlayer() {
      return this.players[this.currentPlayerIndex];
    },
  },
  methods: {
    rollDice() {
      this.diceRoll = Math.floor(Math.random() * 6) + 1; // Numero casuale tra 1 e 6
      this.movePlayer();
    },
    movePlayer() {
      const newPosition = this.currentPlayer.position + this.diceRoll;
      // Se il giocatore supera il limite della mappa, lo facciamo tornare indietro
      this.currentPlayer.position = newPosition >= this.board.length ? this.board.length - 1 : newPosition;
      // Verifica se il giocatore è su una casella speciale
      this.checkSpecialCell();
      // Passa al prossimo giocatore
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    },
    checkSpecialCell() {
      const currentCell = this.board[this.currentPlayer.position];
      if (currentCell.special) {
        alert(`Casella speciale: ${currentCell.label}`);
        // Logica aggiuntiva per le caselle speciali (es. penalità, bonus, etc.)
      }
    },
    endGame() {
      this.$emit('endGame'); // Notifica al componente principale che il gioco è finito
    },
  },
};
</script>

<style scoped>
.game-board {
  text-align: center;
  padding: 20px;
}

.player-info {
  margin-bottom: 20px;
}

.player-status {
  margin-bottom: 20px;
}

.player-status ul {
  list-style-type: none;
  padding: 0;
}

.player-status li {
  font-size: 16px;
  margin: 5px 0;
}

.board {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 colonne per la mappa */
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  grid-auto-rows: 100px;
  max-width: 100%;
  overflow-x: auto;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #f0e68c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #000;
  border-radius: 5px;
  font-weight: bold;
}

.current-player {
  background-color: #ff6347; /* Colore della cella quando ci sono giocatori sopra */
}

.special-cell {
  background-color: #ffcc00; /* Colore delle celle speciali */
  font-weight: bold;
  color: #fff;
}

.controls {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  background-color: #ccc;
}
</style>