<template>
  <div class="spotify-player" :class="{ open: isOpen, dragging: isDragging }" @mousedown="startDrag" ref="player">
    <button class="toggle-button" @click.stop="togglePlayer">
      <img :src="LogoSpotify" alt="Logo Spotify" class="logo"/>
    </button>
    <iframe
      v-if="isOpen"
      :src="playlistUrl"
      width="100%"
      height="100%"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
  </div>
</template>

<script>
import LogoSpotify from "../assets/images/Logo/Logo-Spotify.jpg";
export default {
  name: 'SpotifyPlayer',
  data() {
    return {
      playlistUrl: "https://open.spotify.com/embed/playlist/3klgHkDgLPrZ7E3dDR2GVN?si=3b77095acae141f5&autoplay=true",
      isOpen: true, // Manteniamo il player aperto per default
      LogoSpotify,
      offsetX: 0,
      offsetY: 0,
      isDragging: false
    };
  },
  methods: {
    togglePlayer() {
      this.isOpen = !this.isOpen;
    },
    startDrag(event) {
      if (window.innerWidth <= 768) { // Attiva drag and drop solo su dispositivi mobili
        this.isDragging = true;
        this.offsetX = event.clientX - this.$refs.player.offsetLeft;
        this.offsetY = event.clientY - this.$refs.player.offsetTop;
        document.addEventListener('mousemove', this.onDrag);
        document.addEventListener('mouseup', this.stopDrag);
      }
    },
    onDrag(event) {
      if (this.isDragging) {
        const x = event.clientX - this.offsetX;
        const y = event.clientY - this.offsetY;
        this.$refs.player.style.left = `${x}px`;
        this.$refs.player.style.top = `${y}px`;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    }
  }
};
</script>

<style scoped>
.spotify-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotify-player.open {
  width: 90vw;
  max-width: 300px;
  height: 380px;
}

.spotify-player.dragging {
  cursor: move;
}

.spotify-player .toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
}

.spotify-player .logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

iframe {
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 100%;
}

/* Media Queries per Responsività */
@media (max-width: 768px) {
  .spotify-player {
    cursor: move; /* Indica che l'elemento è trascinabile su dispositivi mobili */
  }

  .spotify-player .logo {
    width: 40px;
    height: 40px;
  }

  .spotify-player.open {
    width: 85vw;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .spotify-player .logo {
    width: 35px;
    height: 35px;
  }

  .spotify-player.open {
    width: 80vw;
    height: 250px;
  }
}
</style>
