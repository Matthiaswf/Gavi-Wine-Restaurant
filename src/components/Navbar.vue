<template>
  <div class="container">
    <router-link class="logo-container" to="/"
      ><div class="logo">Gavi</div></router-link
    >
    <ul class="nav-links">
      <li>
        <router-link to="/reserve" active-class="active-link"
          >RESERVE</router-link
        >
      </li>
      <li>
        <router-link to="/menu" active-class="active-link">MENU</router-link>
      </li>
      <li>
        <router-link to="/wine" active-class="active-link"
          >WINE SELECTION</router-link
        >
      </li>
      <li>
        <router-link to="/story" active-class="active-link"
          >OUR STORY</router-link
        >
      </li>

      <li>
        <router-link to="/events" active-class="active-link"
          >EVENTS</router-link
        >
      </li>
      <li>
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
    <div class="mobile-links">
      <ul class="nav-links">
        <li>
          <router-link to="/reserve" active-class="active-link"
            >RESERVE</router-link
          >
        </li>
        <li>
          <router-link to="/menu" active-class="active-link">MENU</router-link>
        </li>
        <li>
          <router-link to="/wine" active-class="active-link"
            >WINE SELECTION</router-link
          >
        </li>
        <li>
          <router-link to="/story" active-class="active-link"
            >OUR STORY</router-link
          >
        </li>

        <li>
          <router-link to="/events" active-class="active-link"
            >EVENTS</router-link
          >
        </li>
        <li>
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
    <button
      :class="{ 'menu-icon': true, open: isMenuOpen }"
      @click="toggleMenu"
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/Hamline.ttf') format('truetype'),
    url('@/assets/fonts/Hamline.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.container {
  min-height: 100%;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Lora, serif;
  padding: 1rem;
}
.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}

.logo {
  font-family: 'CustomFont', sans-serif;
  font-size: 6rem;
  padding: 15% 0% 10%;
  cursor: pointer;
}

.nav-links {
  width: 100%;
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

.menu-icon {
  display: none;
}
.mobile-links {
  display: none;
}

/* Mobile */

@media (max-width: 991px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    min-height: 0;
  }
  .logo-container {
    height: 100%;
    width: fit-content;
    justify-content: center;
    align-items: center;
    border-bottom: none;
    text-align: center;
    padding: 0px 15px;
  }
  .logo {
    height: 100%;
    font-size: 4rem;
    padding: 0;
  }
  .nav-links {
    display: none;
  }

  /* Mobile Menu Toggle */
  .menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 15px;
    z-index: 10;
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
