<template>
  <div
    class="spotify-player"
    :class="{ open: isOpen }"
    ref="player"
  >
    <button class="toggle-button" @click.stop="togglePlayer">
      <img :src="LogoSpotify" alt="Logo Spotify" class="logo" />
    </button>
    <iframe
      v-if="isOpen"
      :src="playlistUrl"

      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
import interact from "interactjs";
import LogoSpotify from "../assets/images/Logo/Logo-Spotify.jpg";

export default {
  name: "SpotifyPlayer",
  data() {
    return {
      playlistUrl:
        "https://open.spotify.com/embed/playlist/3klgHkDgLPrZ7E3dDR2GVN?si=3b77095acae141f5&autoplay=true",
      isOpen: true,
      LogoSpotify,
    };
  },
  methods: {
    togglePlayer() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    const player = this.$refs.player;

    interact(player)
      .draggable({
        listeners: {
          move(event) {
            const target = event.target;
            const dataX = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const dataY = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
         
            target.style.transform = `translate(${dataX}px, ${dataY}px)`;
            target.setAttribute("data-x", dataX);
            target.setAttribute("data-y", dataY);
          },
        },
        inertia: true, 
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
      });
  },
  beforeDestroy() {
    interact(this.$refs.player).unset(); 
  },
};
</script>

<style scoped>
.spotify-player {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  z-index: 1000;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; 
}

.spotify-player.open {
  width: 90vw;
  max-width: 300px;
  height: 380px;

}

.spotify-player .toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.spotify-player .logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

iframe {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .spotify-player.open {
    width: 85vw;
    height: 300px;
  }

  .spotify-player {
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
  }

  .spotify-player.open {
    width: 85vw;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .spotify-player {
    bottom: 20px;
    left: 20px;
    width: 45px;
    height: 45px;
  }

  .spotify-player.open {
    width: 80vw;
    height: 250px;
  }
}
</style>