<template>
  <div class="menu-container">
    <MenuGallery class="mobile-banner"></MenuGallery>
    <div class="introduction">
      <div class="title">Menu</div>
      <div class="menu-text">
        <p></p>
      </div>
    </div>
    <!-- Filter Nav -->
    <nav class="filter">
      <button
        @click="filter = 'Dinner Course'"
        :class="{ active: filter === 'Dinner Course' }"
      >
        Dinner Course
      </button>
      <button
        @click="filter = 'Seasonal'"
        :class="{ active: filter === 'Seasonal' }"
      >
        Seasonal Menu
      </button>
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
      <button @click="filter = 'Pizza'" :class="{ active: filter === 'Pizza' }">
        Pizza
      </button>
    </nav>

    <!-- Menus -->
    <div v-if="filter === 'Dinner Course'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">APPETIZER</div>
        <div class="dish">
          <div class="dish-name">
            Jamon Serrano, Chevre Goat Cheese & Seasonal Fruit
          </div>
        </div>
        <div class="menu-title course">Soup</div>
        <div class="dish">
          <div class="dish-name">
            Tomato Stew With Scallops, Sea Shell, Black Tiger Shrimp & Tilapia
            Fish
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            French Cream Style Escargot& Roasted Garlic
          </div>
        </div>
        <div class="menu-title course">MAIN COURSE</div>
        <div class="dish">
          <div class="dish-name">Korean Strip Loin Steak 1+ Grade (180g)</div>
        </div>
        <div class="menu-title course">Desert</div>
        <div class="dish">
          <div class="dish-name">Vanilla Ice cream or Crème Brûlée</div>
          <div class="dish-name">Coffee or Herbal Tea</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Seasonal'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">SEASONAL MENU</div>
        <div class="dish">
          <div class="dish-name">
            Oven Roasted Oysters in the Shell with Dill Beurre Blanc Sauce (8~9
            pcs.)
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Starters and Sides'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">STARTERS & SIDES</div>
        <div class="dish">
          <div class="dish-name">
            Chili Bean Cheese Dipping Sauce & Tortilla Nachos
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Nuts & Deep-fried Vegetable</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Chevre Goat Cheese, Lindon Honey & French Pastry
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Crispy French Fries (with Truffle Aioli Dipping Sauce)
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Cheese French Fries (with Truffle Aioli Dipping Sauce)
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Spanish Style Garlic Shrimp Tapas</div>
        </div>
      </div>
      <div class="dish">
        <div class="dish-name">Assorted Olives</div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">CHEESE & CHARCUTERIE</div>
        <div class="dish">
          <div class="dish-name">
            Jamon Serrano, Chevre Goat Cheese & Seasonal Fruit
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Nuts, Apple Chutney & Roasted Brie Cheese</div>
        </div>
        <div class="dish">
          <div class="dish-name">Cherry Tomato & Brie Cheese Bruschetta</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Green Olives, Roasted Brie Cheese & Fruits Platter
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">8 Assorted Cheeses Platter</div>
        </div>
        <div class="dish">
          <div class="dish-name">8 Assorted Cheeses & Fruits Platter</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Charcuterie Platter (Jamon Serrano & Salami)
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Main Dishes'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">PASTA</div>
        <div class="dish">
          <div class="dish-name">Sicilian Spaghetti Norma</div>
        </div>
        <div class="dish">
          <div class="dish-name">Lasagne with Ragu Sauce & Three Cheeses</div>
        </div>
        <div class="dish">
          <div class="dish-name">Calamari Ink Spaghetti</div>
        </div>
        <div class="dish">
          <div class="dish-name">Spicy Chicken Creamy Pasta</div>
        </div>
        <div class="dish">
          <div class="dish-name">Black Olive & Anchovy Tapenade Pasta</div>
        </div>
        <div class="dish">
          <div class="dish-name">Homemade Basil Pesto Pasta</div>
        </div>
        <div class="dish">
          <div class="dish-name">Homemade Chicken Pesto Pasta</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">STEAK</div>
        <div class="dish">
          <div class="dish-name">
            Strip Loin Steak 1+ Grade with Roasted Garlic and French Cream Style
            Escargot
          </div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">SEAFOOD STEW</div>
        <div class="dish">
          <div class="dish-name">
            Gavi Tomato Stew with Scallops, SeaShell, Black Tider Shrimp &
            Tilapia Fish
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Salads'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">SALADS</div>
        <div class="dish">
          <div class="dish-name">Classic Mediterranean Greek Salad</div>
        </div>
        <div class="dish">
          <div class="dish-name">Classic Caesar Salad</div>
        </div>
        <div class="dish">
          <div class="dish-name">Cajun Shrimp & Hawaiian Style Salad</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Buffalo Burrata Cheese & Wild Rucola Salad
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Pizza'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">PIZZA</div>
        <div class="dish">
          <div class="dish-name">
            Tasty Sicilian Anchovy, Black Olive & Mozzarella Cheese
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Homemade Basil Pesto, Buffalo Burrata Cheese & Sundried Tomato
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Homemade Dried Fig & Three Cheeses</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Jamon Serrano, Fresh Wild Rucola, Sundried Tomato & Mozzarella
            Cheese
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Pepperoni & Mozzarella</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Vegan and Vegetarian'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">PASTA</div>
        <div class="dish">
          <div class="dish-name">Sicilian Spaghetti Norma</div>
        </div>
        <div class="dish">
          <div class="dish-name">Basil Pesto Pasta</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">STARTERS & SIDES</div>
        <div class="dish">
          <div class="dish-name">
            Chili Bean Cheese Dipping Sauce and Nachos
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Crispy French Fries with Truffle Aioli Dipping Sauce
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Assorted Olives</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">SALADS</div>
        <div class="dish">
          <div class="dish-name">Classic Mediterranean Greek Salad</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Buffalo Burrata Cheese & Wild Rucola Salad
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Drinks and Desserts'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">DESSERTS</div>
        <div class="dish">
          <div class="dish-name">Crème Brulée</div>
        </div>
        <div class="dish">
          <div class="dish-name">Vanilla Ice Cream</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">SODA</div>
        <div class="dish">
          <div class="dish-name">Sprite</div>
        </div>
        <div class="dish">
          <div class="dish-name">Coca-Cola</div>
        </div>
        <div class="dish">
          <div class="dish-name">Sparkling Water</div>
        </div>
        <div class="dish">
          <div class="dish-name">Home Made Lemonade</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">COFFEE</div>
        <div class="dish">
          <div class="dish-name">Gavi Blend (French Press)</div>
        </div>
        <div class="dish">
          <div class="dish-name">Drip/Hand Brew</div>
        </div>
        <div class="dish">
          <div class="dish-name">Espresso (Single or Double)</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">TEA</div>
        <div class="dish">
          <div class="dish-name">Honey Bush</div>
        </div>
        <div class="dish">
          <div class="dish-name">Hibiscus</div>
        </div>
        <div class="dish">
          <div class="dish-name">Chamomile Lavender</div>
        </div>
        <div class="dish">
          <div class="dish-name">Lemon Balm</div>
        </div>
        <div class="dish">
          <div class="dish-name">Peppermint</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">BOTTLED BEER</div>
        <div class="dish">
          <div class="dish-name">Inedit Damm</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">DRAFT BEER</div>
        <div class="dish">
          <div class="dish-name">Heineken</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MenuGallery from '@/components/MenuGallery.vue';
export default {
  components: {
    MenuGallery,
  },
  setup() {
    const filter = ref('Dinner Course');
    return {
      filter,
      MenuGallery,
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

/* Top */
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  overflow-x: hidden;
  overflow-y: auto;
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
  margin-top: 40px;
}
.title {
  font-family: 'Unna', serif;
  font-size: 4rem;
  font-weight: 100;
  font-style: italic;
}
.menu-text {
  font-size: 1.2rem;
  font-weight: 300;
}
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
  box-sizing: border-box; /* Ensure padding and borders are included in the width/height */
}
button.active {
  border: 1px solid grey;
  color: black;
}
/* Menu Styling */
.menu {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping of items */
  gap: 20px;
  justify-content: flex-start;
  margin-top: 2rem;
  padding: 1rem;
  min-width: 1010px;
  max-width: 1010px;
  text-align: left;
}

.menu-wrap {
  width: calc(50% - 20px); /* Each menu-wrap takes up 50% minus the gap */
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
}
.menu-title {
  width: 100%;
  font-size: 2.4rem;
  margin-top: 60px;
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

.mobile-banner {
  display: none;
}
/* Mobile Section */

@media (max-width: 991px) {
  .mobile-banner {
    display: block;
    width: 100%;
    min-height: 400px;
    background-image: url('@/assets/MobileImages/home/9.jpg');
    background-size: cover;
    background-position: center;
  }
  .filter {
    margin-top: 10px;
  }

  .menu {
    flex-direction: column !important;
    flex: 1;
    box-sizing: content-box;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    min-width: 0;
    width: 100%;
    margin-top: 0px;
  }

  .menu-wrap {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin-top: 40px;
  }

  button {
    height: 46.875px; /* Increase height by 1/4 */
    width: 142.5px; /* Reduce width */
    font-size: 0.7rem; /* Slightly smaller font */
    padding: 0.45rem 0.75rem; /* Increase horizontal padding */
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 3em;
  }
}
@media (max-width: 844px) {
  button {
    height: 46.875px; /* Reduce height by 1/4 */
    width: 106.875px; /* Reduce width by 1/4 */
    font-size: 0.7rem; /* Reduce font size by 1/4 */
    padding: 0; /* Increase horizontal padding */
    margin-left: 1em; /* Reduce margin by 1/4 */
    margin-right: 1em; /* Reduce margin by 1/4 */
    margin-top: 3em; /* Reduce margin by 1/4 */
  }
}
</style>
