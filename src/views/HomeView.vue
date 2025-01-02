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
  <div class="mobile-container">Hello</div>
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
    display: none;
  }

  .mobile-container {
    display: block;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
}
</style>
