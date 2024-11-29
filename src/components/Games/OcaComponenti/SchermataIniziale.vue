<template>
  <div>
    <h2>Inserisci i giocatori</h2>
    <input v-model="newPlayerName" placeholder="Nome Giocatore" />
    <button @click="addPlayer">Aggiungi Giocatore</button>
    <div v-if="players.length > 0">
      <h3>Giocatori:</h3>
      <ul>
        <li v-for="(player, index) in players" :key="index">{{ player }}</li>
      </ul>
    </div>
    <button v-if="players.length > 0" @click="startGame(players)">Inizia il Gioco</button>
  </div>
</template>

<script>
export default {
  props: {
    startGame: Function, // Funzione per iniziare il gioco
  },
  data() {
    return {
      newPlayerName: '',
      players: [],
    };
  },
  methods: {
    addPlayer() {
      if (this.newPlayerName) {
        this.players.push(this.newPlayerName);
        this.newPlayerName = ''; // Resetta il campo di input
      }
    },
  },
};
</script>