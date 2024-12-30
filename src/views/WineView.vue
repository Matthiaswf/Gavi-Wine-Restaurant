<template>
  <div class="menu-container">
    <div class="wine-showcase">
      <div class="wine-one wine-img"></div>
      <div class="wine-two wine-img"></div>
      <div class="wine-three wine-img"></div>
    </div>

    <!-- Filter Nav -->
    <nav class="filter">
      <button
        @click="filter = 'French'"
        :class="{ active: filter === 'French' }"
      >
        French
      </button>
      <button
        @click="filter = 'Italian'"
        :class="{ active: filter === 'Italian' }"
      >
        Italian
      </button>
      <button
        @click="filter = 'Spanish'"
        :class="{ active: filter === 'Spanish' }"
      >
        Spanish
      </button>
      <button @click="filter = 'Other'" :class="{ active: filter === 'Other' }">
        Other
      </button>
    </nav>

    <!-- Menus -->
    <div v-if="filter === 'French'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Italian'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Spanish'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Other'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Example Wine</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const filter = ref('French');
    return {
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
}
/* Top */
.wine-showcase {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%; /* Make the showcase smaller */
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
  background-image: url('@/assets/wineMenu/1.jpg');
}
.wine-three {
  background-image: url('@/assets/wineMenu/1.jpg');
}
/* Filter */
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
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
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  cursor: pointer;
}
button.active {
  border: 1px solid grey;
  color: black;
}
/* Menu Styling */
.menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  > * {
    flex: 1 1 calc(50% - 20px);
    box-sizing: border-box;
  }
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
}
.menu-wrap {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  width: 100%;
  height: auto;
}
.menu-title {
  width: 100%;
  font-size: 2.4rem;
  font-weight: 100;
  font-style: italic;
  text-align: left;
}
.dish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
}
.dish-name {
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  padding-bottom: 15px;
}
</style>
