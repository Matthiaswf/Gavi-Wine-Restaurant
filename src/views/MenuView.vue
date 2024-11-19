<template>
  <div class="menu-container">
    <div class="introduction">
      <div class="title">Menu</div>
      <div class="menu-text">
        <p>
          Making good food requires fresh ingredients, proper techniques, and a
          passion for cooking. Always start with high-quality ingredients and
          take your time to prepare them properly. Experiment with different
          flavors and don't be afraid to try new recipes. Happy cooking!
        </p>
      </div>

      <!-- Filter Nav -->
      <nav class="filter">
        <button
          @click="filter = 'Starters and Sides'"
          :class="{ active: filter === 'Starters and Sides' }"
        >
          Starters and Sides
        </button>
        <button
          @click="filter = 'Main Dishes'"
          :class="{ active: filter === 'Main Dishes' }"
        >
          Main Dishes
        </button>
        <button
          @click="filter = 'Salads'"
          :class="{ active: filter === 'Salads' }"
        >
          Salads
        </button>
        <button
          @click="filter = 'Vegan and Vegetarian'"
          :class="{ active: filter === 'Vegan and Vegetarian' }"
        >
          Vegan and Vegetarian
        </button>
        <button
          @click="filter = 'Drinks and Desserts'"
          :class="{ active: filter === 'Drinks and Desserts' }"
        >
          Drinks and Deserts
        </button>
        <button
          @click="filter = 'Pizza'"
          :class="{ active: filter === 'Pizza' }"
        >
          Pizza
        </button>
      </nav>

      <!-- Menus -->
      <div v-if="filter === 'Starters and Sides'" class="menu">
        <div class="menu-wrap">
          <div class="menu-title">STARTERS & SIDES</div>
          <div class="dish">
            <div class="dish-name">
              Chili Bean Cheese Dipping Sauce & Tortilla Nachos
            </div>
            <div class="dish price">13</div>
          </div>
          <div class="dish">
            <div class="dish-name">Deep-fried Seaweed</div>
            <div class="dish price">12</div>
          </div>
          <div class="dish">
            <div class="dish-name">
              Chevre Goat Cheese, Lindon Honey & French Pastry
            </div>
            <div class="dish price">13</div>
          </div>
          <div class="dish">
            <div class="dish-name">
              Crispy French Fries (with Truffle Aioli Dipping Sauce)
            </div>
            <div class="dish price">15</div>
          </div>
          <div class="dish">
            <div class="dish-name">Spanish Style Garlic Shrimp Tapas</div>
            <div class="dish price">15</div>
          </div>
        </div>
        <div class="menu-container">
          <div class="menu-title">CHEESE & CHARCUTERIE</div>
          <div class="dish">
            <div class="dish-name">
              Jamon Serrano, Chevre Goat Cheese & Seasonal Fruit
            </div>
            <div class="dish price">22</div>
          </div>
          <div class="dish">
            <div class="dish-name">
              Nuts, Apple Chutney & Roasted Brie Cheese
            </div>
            <div class="dish price">25</div>
          </div>
          <div class="dish">
            <div class="dish-name">Cherry Tomato & Brie Cheese Bruschetta</div>
            <div class="dish price">20</div>
          </div>
          <div class="dish">
            <div class="dish-name">
              Green Olives, Roasted Brie Cheese & Fruits Platter
            </div>
            <div class="dish price">40</div>
          </div>
          <div class="dish">
            <div class="dish-name">8 Assorted Cheeses Platter</div>
            <div class="dish price">38</div>
          </div>
          <div class="dish">
            <div class="dish-name">8 Assorted Cheeses & Fruits Platter</div>
            <div class="dish price">53</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const filter = ref('Starters and Sides');
    return {
      filter,
    };
  },
};
</script>

<style>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  width: 100%;
}
.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
}
.title {
  font-family: 'Unna', serif;
  font-size: 2.5rem;
  font-weight: 100;
  font-style: italic;
}
.menu-text {
  font-size: 1rem;
  font-weight: 300;
}
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
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
  flex: wrap;
  align-items: center;
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
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  width: 100%;
  height: 100%;
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
}
.dish.price {
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
}
</style>
