<template>
  <div class="mobile-links">
    <ul class="nav-links">
      <li @click="handleClick">
        <router-link to="/reserve" active-class="active-link"
          >RESERVE</router-link
        >
      </li>
      <li @click="handleClick">
        <router-link to="/menu" active-class="active-link">MENU</router-link>
      </li>
      <li @click="handleClick">
        <router-link to="/wine" active-class="active-link"
          >WINE SELECTION</router-link
        >
      </li>
      <li @click="handleClick">
        <router-link to="/story" active-class="active-link"
          >OUR STORY</router-link
        >
      </li>
      <li @click="handleClick">
        <router-link to="/photos" active-class="active-link"
          >PHOTOS</router-link
        >
      </li>

      <li @click="handleClick">
        <router-link to="/events" active-class="active-link"
          >EVENTS AND SPECIALS</router-link
        >
      </li>
      <li @click="handleClick">
        <router-link to="/contact" active-class="active-link"
          >CONTACT AND LOCATION</router-link
        >
      </li>
      <li class="sns-links">
        <div>
          <a href="https://www.facebook.com/YoonkyoungSuk/" target="_blank">
            <img
              class="sns-icon"
              src="@/assets/icons/facebook.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com/gavi_wine" target="_blank">
            <img
              class="sns-icon"
              src="@/assets/icons/instagram.png"
              alt="Instagram"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileLinks',
  methods: {
    handleClick() {
      // Emit an event to notify the parent
      this.$emit('close-menu');
    },
  },
};
</script>

<style scoped>
.mobile-links {
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 30;
}
.nav-links {
  height: 100%;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10% 0%;
  font-size: 1rem;
  font-weight: bold;
}
.nav-links li {
  text-align: center;
  padding: 10px 0px;
  cursor: pointer;
}
.active-link {
  color: black;
}
.sns-links {
  border-top: 1px solid black;
  width: 90%;
  padding-top: 25px;
  margin-top: 40px;
}

.sns-icon {
  width: 20px;
  height: 20px;
  margin: 0px 10px;
}
</style>
