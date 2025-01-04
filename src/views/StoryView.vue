<template>
  <div class="story-container">
    <div class="story-cover"></div>
    <h2>Our Story</h2>
    <div class="story-text">
      <p>
        Gavi Wine Restaurant has been a dream of Suk Yoonkyoung for a very long
        time. Gavi was opened as a way to provide excellent Western dishes
        paired with an amazing 500 bottle selection. Yoonkyoung acquired her
        Sommelier’s Certificate in Wine in 2007 in order to help her customers
        find the best match for their taste. This worked so well, that one
        fateful day, a handsome young man from South Carolina visited Gavi.
        After many visits, he asked Yoonkyoung on a date. Not long after that,
        they were married.
      </p>
      <p>
        Fred Soland is a professor at Pusan National University. He has over 20
        years teaching experience, and many country stamps have filled his
        passport. Yet, the biggest adventure was getting married and sharing his
        life with Yoonkyoung. They have traveled several times to his home of
        South Carolina and visited family, friends, and the old south that is
        Charleston. Yoonkyoung fell in love with the old world buildings of The
        Battery and wanted to bring that atmosphere to her restaurant.
      </p>
      <p>
        After 11 years located in the trendy south side of Seomyeon in Busan,
        South Korea, it became time come to pack up and move to Haeundae. The
        new Gavi Wine Restaurant opened in January of 2020 with a cozy
        Charleston atmosphere. Simple wood tile with elegant rails frame the new
        location in Jungdong, Haeundae.
      </p>
      <p>
        Comfort, warmth, atmosphere and charm will greet you as you enter the
        new door, designed after one of Yoonkyoung’s favorite Charleston
        restaurant entryways. If you want to wait for your party to arrive, we
        have a bar with an excellent view of our wine selection. Also, there
        will be many chances to attend the Wine Tasting Parties and wine classes
        in the future. With the outdoor deck, we can provide a nice setting for
        you to enjoy a glass of selected vino and a small platter of fruits,
        nuts or cheese to match your taste.
      </p>
      <p>
        For larger reservations, Gavi Wine Restaurant has a private room,
        perfect for up to 8 guests. Gavi will be able to seat 28 comfortably.
        Standing parties will be available, and the outdoor area can be used,
        weather permitting.
      </p>
      <p>
        Don’t hesitate to ask about our Vegan and Vegetarian options. Our chef
        is able to customize every order. Our menu is filled with steaks,
        salads, pasta and risotto dishes. Pizzas and Calzones will make a strong
        return to our selections. Our seasonal bread is made fresh in house. By
        the bottle, or by the glass, come and enjoy a great meal paired with a
        great wine at Gavi Wine Restaurant in Jungdong, Haeundae.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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

.story-container,
.story-cover,
h2,
.story-text p {
  animation: fadeIn 1s ease-in-out;
}

.story-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  gap: 1rem;
  width: 100%;
}

h2 {
  font-family: 'Unna', serif;
  font-style: italic;
  font-size: 3rem;
  font-weight: 200;
}
.story-cover {
  background-image: url(../assets/story-cover.png);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  min-height: 900px;
  width: 100%;
}
.story-text {
  height: 100%;
  width: 80%;
  max-width: 950px;
  font-size: 1.1rem;
}

/* Mobile Section */
@media (max-width: 991px) {
  .story-container {
    margin-bottom: 15px;
  }

  .story-cover {
    min-height: 500px;
    background-image: url(../assets/story-mobile2.jpg);
  }
  h2 {
    font-size: 2rem;
  }
  .story-text {
    font-size: 1rem;
  }
}
</style>
