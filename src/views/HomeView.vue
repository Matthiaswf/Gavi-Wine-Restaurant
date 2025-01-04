<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper"
    :allow-touch-move="false"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :effect="'fade'"
    :speed="2000"
  >
    <SwiperSlide><div class="swiper-item item1"></div></SwiperSlide>
    <SwiperSlide><div class="swiper-item item2"></div></SwiperSlide>
    <SwiperSlide><div class="swiper-item item3"></div></SwiperSlide>
    <SwiperSlide><div class="swiper-item item4"></div></SwiperSlide>
    <!-- Add more slides as needed -->
    <div class="swiper-logo">Gavi</div>
  </Swiper>
  <div class="mobile-container">
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
      <button>
        <router-link to="/menu" active-class="active-link">MENU</router-link>
      </button>
    </div>
    <img class="mobile-img" src="@/assets/MobileImages/home/9.jpg" alt="" />
    <div class="link-section">
      <h3>Reservations</h3>
      <span>Walk-ins are always welcome.</span>
      <span>Call <a href="tel:+0518081655">(051)808-1655</a></span>
      <button>
        <router-link to="/reserve" active-class="active-link"
          >Reserve</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
}
.swiper-item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
  overflow: hidden;
}
.item1 {
  background-image: url('../assets/sliderImages/slider1.jpg');
}
.item2 {
  background-image: url('../assets/sliderImages/slider2.jpg');
}
.item3 {
  background-image: url('../assets/sliderImages/slider3.jpg');
}
.item4 {
  background-image: url('../assets/sliderImages/slider4.jpg');
}
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/Hamline.ttf') format('truetype'),
    url('@/assets/fonts/Hamline.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.swiper-logo {
  font-family: 'CustomFont';
  position: absolute;
  top: 80%;
  font-size: 8rem;
  color: white;
  text-align: center;
  z-index: 1;
}
.mobile-container {
  display: none;
}
/* Mobile */
@media (max-width: 991px) {
  .swiper {
    min-height: 500px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .swiper-logo {
    top: 80%;
    font-size: 4rem;
  }

  .mobile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px; /* Space between images */
    width: calc(100% - 30px); /* Ensure space on both sides */
    margin: 0px 15px 15px; /* Margin around container */
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
