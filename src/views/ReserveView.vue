<template>
  <div class="reserve-container">
    <div class="banner">
      <Gallery class="gallery" />
      <div class="gallery-title">Gavi</div>
    </div>
    <div class="text-wrap">
      <div class="title">Make a Reservation</div>
      <div class="text">
        Walk-ins are always welcome.<br />
        Please reserve a table for groups more than five or for upcoming
        holidays.
        <br />

        Call (051)808-1655.<br />

        Large parties will require menu planning.
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
export default {
  components: {
    Gallery,
  },
  setup() {
    return { Gallery };
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
  padding: 1rem;
}
.title {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-size: 3rem;
  text-align: center;
}
.text {
  font-size: 1rem;
  text-align: left;
  width: 100%;
  max-width: 1010px;
  line-height: 2;
}
</style>
