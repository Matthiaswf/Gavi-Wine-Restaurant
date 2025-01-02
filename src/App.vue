<template>
  <div class="app-container">
    <Navbar class="navbar" />
    <router-view class="router-view" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
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
}
</style>
