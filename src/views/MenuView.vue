<template>
  <div class="menu-container">
    <div class="introduction">
      <div class="title">Menus</div>
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
      <div class="menu-items">
        <div v-for="item in getMenuItems()" :key="item.title" class="menu-item">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-price">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // Menu Data

    const startersAndSides = {
      'Starters and Sides': {
        title: 'Starters and Sides',
        items: [
          {
            title: 'Chili Bean Cheese Dipping Sauce & Tortilla Nachos',
            price: '$5.99',
          },
          { title: 'Deep-fried Seaweed (New)', price: '$4.99' },
          {
            title: 'Chevre Goat Cheese, Lindon Honey & French Pastry *New',
            price: '$6.99',
          },
          {
            title:
              'Crispy French Fries (with Truffle Aioli Dipping Sauce) *New',
            price: '$3.99',
          },
          { title: 'Spanish Style Garlic Shrimp Tapas', price: '$7.99' },
          { title: 'Assorted Olives', price: '$3.49' },
        ],
      },
      'Cheese & Charcuterie': {
        title: 'Cheese & Charcuterie',
        items: [
          {
            title: 'Jamon Serrano, Chevre Goat Cheese & Seasonal Fruit',
            price: '$8.99',
          },
          { title: 'Cherry Tomato & Brie Cheese Bruschetta', price: '$6.99' },

          {
            title: 'Green Olives, Roasted Brie Cheese & Fruits Platter',
            price: '$9.99',
          },

          { title: '8 Assorted Cheeses Platter', price: '$12.99' },

          { title: '8 Assorted Cheeses & Fruits Platter', price: '$14.99' },

          {
            title: 'Charcuterie Platter (Jamon Serrano & Salami)',
            price: '$10.99',
          },
          { title: '8 Assorted Cheeses & Fruits Platter', price: '$14.99' },
          {
            title: 'Charcuterie Platter (Jamon Serrano & Salami)',
            price: '$15.00',
          },
        ],
      },
    };
    const mainDishes = {
      'Main Dishes': {
        title: 'Pasta',
        items: [
          {
            title: 'Sicilian Spaghetti Norma',
            price: '$15.99',
          },
          { title: 'Lasagne with Ragu Sauce & Three Cheeses', price: '$12.99' },
          {
            title: 'Calamari Ink Spaghetti',
            price: '$18.99',
          },
          {
            title: 'Spicy Chicken Creamy Pasta',
            price: '$14.99',
          },
          { title: 'Black Olive & Anchovy Tapenade Pasta', price: '$17.99' },
          { title: 'Homemade Basil Pesto Pasta', price: '$16.99' },
          { title: 'Homemade Chicken Pesto Pasta', price: '$17.99' },
        ],
      },
      Steak: {
        title: 'Steak',
        items: [
          {
            title:
              'Strip Loin Steak 1+ Grade with Roasted Garlic and French Cream Style Escargot',
            price: '$29.99',
          },
        ],
      },
    };
    const salads = {
      Salads: {
        title: 'Salads',
        items: [
          {
            title: 'Classic Greek Salad',
            price: '$8.99',
          },
          {
            title: 'Classic Caesar Salad',
            price: '$9.99',
          },
          {
            title: 'Cajun Shrimp & Hawaiian Style Salad',
            price: '$10.99',
          },
          {
            title: 'Buffalo Burrata Cheese & Wild Rucola Salad',
            price: '$11.99',
          },
        ],
      },
    };
    const veganAndVegetarian = {
      'Main Pasta': {
        title: 'Main Pasta',
        items: [
          {
            title: 'Sicilian Spaghetti Norma',
            price: '$12.99',
          },
          {
            title: 'Basil Pesto Pasta',
            price: '$14.99',
          },
        ],
      },
      'Wine Side Menu': {
        title: 'Main Pasta',
        items: [
          {
            title: 'Chili Bean Cheese Dipping Sauce and Nachos',
            price: '$12.99',
          },
          {
            title: 'Crispy French Fries with Truffle Aioli Dipping Sauce',
            price: '$14.99',
          },
          {
            title: 'Assorted Olives',
            price: '$14.99',
          },
        ],
      },
      Salad: {
        title: 'Salad',
        items: [
          {
            title: 'Classic Mediterranean Greek Salad',
            price: '$12.99',
          },
          {
            title: 'Buffalo Burrata Cheese & Wild Rucola Salad',
            price: '$14.99',
          },
        ],
      },
    };
    const pizza = {
      Pizza: {
        title: 'Pizza',
        items: [
          {
            title: 'Tasty Sicilian Anchovy, Black Olive & Mozzarella Cheese',
            price: '$12.99',
          },
          {
            title:
              'Homemade Basil Pesto, Buffalo Burrata Cheese & Sundried Tomato',
            price: '$14.99',
          },
          {
            title:
              'Jamon Serrano, Fresh Wild Rucola, Sundried Tomato & Mozzarella Cheese',
            price: '$14.99',
          },
          {
            title: 'Pepperoni & Mozzarella',
            price: '$14.99',
          },
          {
            title: 'omemade Dried Fig & Three Cheeses',
            price: '$14.99',
          },
        ],
      },
    };
    const drinksAndDesserts = {
      'Drinks and Desserts': {
        title: 'Drinks and Desserts',
        items: [
          {
            title: 'Classic Tiramisu',
            price: '$6.99',
          },
          {
            title: 'Homemade Chocolate Lava Cake',
            price: '$7.99',
          },
          {
            title: 'Homemade Vanilla Ice Cream',
            price: '$5.99',
          },
          {
            title: 'Homemade Chocolate Ice Cream',
            price: '$5.99',
          },
        ],
      },
    };

    // Filter Menu Items
    const getMenuItems = () => {
      switch (filter.value) {
        case 'Starters and Sides':
          return startersAndSides['Starters and Sides'].items;
        case 'Main Dishes':
          return mainDishes['Main Dishes'].items;
        case 'Salads':
          return salads['Salads'].items;
        case 'Vegan and Vegetarian':
          return veganAndVegetarian['Main Pasta'].items;
        case 'Pizza':
          return pizza['Pizza'].items;
        case 'Drinks and Desserts':
          return drinksAndDesserts['Drinks and Desserts'].items;
        default:
          return startersAndSides['Starters and Sides'].items;
      }
    };

    const filter = ref('Starters and Sides');
    return {
      filter,
      startersAndSides,
      mainDishes,
      salads,
      veganAndVegetarian,
      pizza,
      drinksAndDesserts,
      getMenuItems,
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
  margin-top: 2rem;
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

button {
  height: 50px;
  padding: 1rem 1rem 0.8rem;
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-weight: 800;
  font-size: 0.8rem;
  text-align: center;
  margin-left: 1em;
  margin-right: 1em;
  cursor: pointer;
}
button.active {
  border: 1px solid grey;
  color: black;
}
</style>
