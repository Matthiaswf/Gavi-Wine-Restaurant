<template>
  <div class="container">
    <div class="logo">Gavi</div>
    <div class="address">
      Jwadong Sunhwan Ro 8 Beon Gil 78<br />
      Haeundae, Busan
    </div>
    <ul class="nav-links">
      <li>RESERVE</li>
      <li>MENU</li>
      <li>WINE SELECTION</li>
      <li>OUR STORY</li>
      <li>EVENTS</li>
      <li>HOURS AND LOCATION</li>
      <li>CONTACT</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
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

.container {
  min-height: 100%;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Lora, serif;
  padding: 1rem;
}
.logo {
  font-family: 'CustomFont', sans-serif;
  font-size: 6rem;
  padding: 15% 0% 10%;
  cursor: pointer;
}
.address {
  font-size: 0.8rem;
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 30px 0px;
}
.nav-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10% 0%;
  font-size: 1rem;
  font-weight: bold;
}
.nav-links li {
  text-align: center;
  padding: 10px 0px;
  cursor: pointer;
}
</style>
