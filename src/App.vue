<template>
  <div class="app-container">
    <Navbar class="navbar" />
    <router-view />
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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  overflow: auto;
}

.navbar {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  height: 100vh;
  width: 250px;
}
</style>
