<template>
  <div class="reserve-container">
    <div class="banner">
      <EventGallery class="gallery" />
      <div class="gallery-title">Gavi</div>
    </div>
    <div class="text-wrap">
      <div class="title">Events & Specials</div>
      <div class="text">Currently None Scheduled</div>
    </div>
  </div>
</template>

<script>
import EventGallery from '@/components/EventGallery.vue';
export default {
  components: {
    EventGallery,
  },
  setup() {
    return { EventGallery };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.reserve-container {
  animation: fadeIn 1s ease-in;
}
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/Hamline.ttf') format('truetype'),
    url('@/assets/fonts/Hamline.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.reserve-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box; /* Include padding and border in the width and height */
  padding-right: 20px;
}
.banner {
  width: 100%;
  height: 50vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.gallery-title {
  z-index: 0;
  position: absolute;
  top: 40%;
  font-size: 6rem;
  font-family: 'CustomFont', sans-serif;
  color: white;
  text-align: center;
}
.text-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  font-family: 'Unna', serif;
}
.text {
  font-size: 1rem;
  text-align: left;
  width: 100%;
  max-width: 1010px;
  line-height: 2;
}

/* Mobile Section */
@media (max-width: 991px) {
  .gallery-title {
    top: 55%;
    font-size: 4rem;
  }
  .title {
    font-size: 2rem;
  }
  .text {
    font-size: 0.8rem;
  }
}
</style>
