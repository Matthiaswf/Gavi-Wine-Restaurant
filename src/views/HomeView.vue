<template>
  <div class="home-container">
    <div class="banner">
      <Gallery class="gallery" />
      <div class="gallery-title">Gavi</div>
    </div>
  </div>

  <div class="mobile-container">
    <div class="banner">
      <Gallery class="mobile-gallery" />
      <div class="mobile-gallery-title">Gavi</div>
    </div>

    <!-- <img class="mobile-img one" src="@/assets/MobileImages/home/1.jpg" alt="" /> -->
    <h2>Great food, wonderful wine, and an elegant family atmosphere.</h2>
    <img class="mobile-img" src="@/assets/MobileImages/home/10.jpg" alt="" />
    <img class="mobile-img" src="@/assets/MobileImages/home/2.jpg" alt="" />
    <div class="link-section">
      <h3>Menu</h3>
      <span
        >Browse our menu, offering a selection of dishes thoughtfully prepared
        for a refined dining experience.</span
      >
      <button @click="handleClick('/menu')">
        <router-link to="/menu" active-class="active-link">MENU</router-link>
      </button>
    </div>
    <img class="mobile-img" src="@/assets/MobileImages/home/9.jpg" alt="" />
    <div class="link-section">
      <h3>Reservations</h3>
      <span>Walk-ins are always welcome.</span>
      <span>Call <a href="tel:+0518081655">(051)808-1655</a></span>
      <button @click="handleClick('/reserve')">
        <router-link to="/reserve" active-class="active-link"
          >Reserve</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    Gallery,
  },
  setup() {
    const router = useRouter();

    const handleClick = (path) => {
      router.push(path);
    };

    return { Gallery, handleClick };
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box; /* Include padding and border in the width and height */
  padding: 1rem;
  padding-right: 15px; /* Reduced padding-right */
  flex: 1;
  overflow-x: hidden; /* Prevent horizontal overflow */
}
.banner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.gallery {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.gallery-title {
  z-index: 0;
  position: absolute;
  top: 88%;
  font-size: 6rem;
  font-family: 'CustomFont', sans-serif;
  color: white;
  text-align: center;
}

.mobile-container {
  display: none;
}
/* Mobile */
@media (max-width: 991px) {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .home-container {
    display: none;
  }
  body {
    overflow-x: hidden; /* Prevent horizontal scrolling */
    margin: 0; /* Remove any default margin that might cause overflow */
  }
  .mobile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overscroll-behavior: none;
    gap: 15px; /* Space between images */
    width: calc(100% - 30px); /* Ensure space on both sides */
    margin: 0px 15px 15px; /* Margin around container */

    overscroll-behavior: none; /* Disable overscroll */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
  }
  .mobile-gallery {
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .mobile-gallery-title {
    z-index: 1;
    position: absolute;
    top: 80%;
    font-size: 4rem;
    font-family: 'CustomFont', sans-serif;
    color: white;
    text-align: center;
  }
  .mobile-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .mobile-img.one {
    height: 400px;
  }
  .link-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  button {
    height: 50px;
    width: 190px;
    padding: 1rem 1rem 0.8rem;
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    font-weight: 800;
    font-size: 0.8rem;
    text-align: center;
    margin-right: 2em;
    margin-top: 4em;
    margin-bottom: 4em;

    cursor: pointer;
  }
  h2 {
    font-family: 'Unna', serif;
    font-size: 2rem;
    font-style: italic;
    font-weight: 200;
    text-align: center;
    color: #333;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  h3 {
    font-family: 'Unna', serif;
    font-size: 2rem;
    font-style: italic;
    font-weight: 200;
    text-align: left;
    color: #333;
    margin-bottom: 10px;
  }
}
</style>
