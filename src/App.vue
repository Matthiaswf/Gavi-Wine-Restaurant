<template>
  <button :class="{ 'menu-icon': true, open: isMenuOpen }" @click="toggleMenu">
    <div></div>
    <div></div>
    <div></div>
  </button>

  <transition name="slide-down">
    <MobileLinks class="mobile-links" v-if="isMenuOpen" />
  </transition>

  <div class="app-container">
    <Navbar class="navbar" />
    <router-view class="router-view" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import MobileLinks from './components/MobileLinks.vue';
import { ref } from 'vue';
export default {
  components: {
    Navbar,
    MobileLinks,
  },
  setup() {
    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }
    return {
      isMenuOpen,
      toggleMenu,
      Navbar,
      MobileLinks,
    };
  },
};
</script>
<style scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
}

.navbar {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  height: 100vh;
  min-width: 250px;
}
.router-view {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.menu-icon {
  display: none;
}

/* Mobile */

@media (max-width: 991px) {
  .app-container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
  }

  .navbar {
    height: 100px;
    width: 100%;
    position: relative;
    top: auto;
  }

  .router-view {
    height: auto;
    width: 100%;
  }

  /* Mobile Links */
  /* Sliding Animation for MobileLinks */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide-down-enter-from {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

  .mobile-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 20;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-links-enter-active {
    top: 0;
  }

  .mobile-links-leave-active {
    top: -100%;
  }

  /* Mobile Menu Toggle */
  .menu-icon {
    position: fixed;
    top: 30px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 25;
  }

  .menu-icon:focus {
    outline: none;
  }

  .menu-icon div {
    width: 30px;
    height: 3px;
    background: var(--primary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .menu-icon div:nth-child(1) {
    transform: rotate(0);
  }

  .menu-icon div:nth-child(2) {
    opacity: 1;
    transform: translateX(0);
  }

  .menu-icon div:nth-child(3) {
    transform: rotate(0);
  }

  .menu-icon.open div:nth-child(1) {
    transform: rotate(45deg);
  }

  .menu-icon.open div:nth-child(2) {
    opacity: 0;
    transform: translateX(0px);
    transition: opacity 0.1s linear;
  }

  .menu-icon.open div:nth-child(3) {
    transform: rotate(-45deg);
  }
}
</style>
