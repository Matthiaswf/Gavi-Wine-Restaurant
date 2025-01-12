<template>
  <div class="menu-container">
    <div class="wine-showcase">
      <WineGallery class="wine-gallery" />
      <div class="wine-one wine-img"></div>
      <div class="wine-two wine-img"></div>
      <div class="wine-three wine-img"></div>
    </div>

    <div class="introduction">
      <div class="title">We have a selection of over 500 labels.</div>
      <div class="menu-text">
        <p>
          Maintaining a list of so many old and new vintages, variatals and
          favorite wines takes time. Please check in often for new updates of
          selections. If you don’t see a wine you are interested in, please
          contact us. We have connections with the best wine importers. We will
          do our best to find that perfect bottle of wine for you.
        </p>
        <p>
          A Corkage fee of 30.000 per bottle will be charged, limit one outside
          bottle per table.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import WineGallery from '@/components/WineGallery.vue';
import { ref } from 'vue';

export default {
  components: {
    WineGallery,
  },
  setup() {
    const filter = ref('French');
    return {
      WineGallery,
      filter,
    };
  },
};
</script>

<style scoped>
/* Fade in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Fade in Animation */
.menu-container,
.introduction,
.title,
.menu-text,
.filter,
.menu,
.menu-wrap,
.menu-title,
.dish,
.dish-name,
.dish.price {
  animation: fadeIn 1s ease-in-out;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  width: 100%;
  overflow-x: hidden;
}

.wine-gallery {
  display: none;
}
/* Top */
.wine-showcase {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 50%; /* Make the showcase smaller */
  gap: 16px;
}
.wine-img {
  width: 30%; /* Adjust width to fit three images with gaps */
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 4px;
}
.wine-one {
  background-image: url('@/assets/wineMenu/1.jpg');
}
.wine-two {
  background-image: url('@/assets/wineMenu/2.jpg');
}
.wine-three {
  background-image: url('@/assets/wineMenu/3.jpg');
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
  margin-top: 40px;
}
.title {
  font-family: 'Unna', serif;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;
}
.menu-text {
  font-size: 1.2rem;
  font-weight: 300;
}

/* Mobile Section */
@media (max-width: 991px) {
  * {
    box-sizing: border-box;
  }
  .wine-showcase .wine-img {
    display: none;
  }
  .wine-showcase {
    min-height: 500px;
  }
  .wine-gallery {
    display: block;
    width: 100%;
    min-height: 500px;
  }

  .filter {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
