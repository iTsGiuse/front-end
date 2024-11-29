<template>
  <div>
    <h2>Statistiche Finali</h2>
    <ul>
      <li v-for="(player, index) in players" :key="index">
        {{ player }} - Posizione finale: {{ player.position }}
      </li>
    </ul>
    <button @click="restartGame">Ricomincia</button>
  </div>
</template>

<script>
export default {
  props: {
    players: Array,
  },
  methods: {
    restartGame() {
      this.$emit('startGame', []); // Resetta il gioco
    },
  },
};
</script>