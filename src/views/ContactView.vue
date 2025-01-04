<template>
  <div class="main-container">
    <div class="banner">
      <Gallery class="gallery" />
      <div class="gallery-title">Gavi</div>
    </div>

    <div class="info-container">
      <div class="text-wrap">
        <div class="title">Hours and Location</div>
        <div class="text">
          <div class="address">
            Jwadong Sunhwan Ro 8 Beon Gil 78<br />
            Haeundae Gu, Busan South Korea 48079<br />
          </div>

          <div class="hours">
            <h5>Hours</h5>
            Monday–Saturday <br />
            6:00 pm–12:00 am
            <br />
          </div>
          <div class="contact">
            <h5>Contact</h5>
            Call <a href="tel:+82518081655">(051)808-1655</a><br />
            Ko2018sk@gmail.com<br />
          </div>
          <div class="parking">
            <h5>Parking & Subway</h5>
            There is plenty of street parking if you have a car.<br />
            Jungdong Station, Exit 6.
          </div>
        </div>
      </div>
      <div class="map-wrap">
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5397.602694267444!2d129.16816207708916!3d35.1692382579271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb7074c4cca7%3A0x20fffb6d50c9c70e!2sGavi%20Wine%20Restaurant!5e0!3m2!1sen!2skr!4v1735705497416!5m2!1sen!2skr"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.main-container {
  animation: fadeIn 1s ease-in;
}
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/Hamline.ttf') format('truetype'),
    url('@/assets/fonts/Hamline.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.main-container {
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
  height: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.gallery {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.gallery-title {
  z-index: 0;
  position: absolute;
  top: 75%;
  font-size: 6rem;
  font-family: 'CustomFont', sans-serif;
  color: white;
  text-align: center;
}

.info-container {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.text-wrap {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.map-wrap {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map {
  width: 100%;
  height: 100%;
  border: 0;
}
.title {
  width: 100%;
  font-style: italic;
  font-size: 3rem;
  font-family: 'Unna', serif;
}
.text {
  font-size: 1rem;
  width: 100%;
  max-width: 1010px;
  line-height: 2;
}
h5 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.address {
  border-top: 1px solid black;
  padding: 10px 0;
  width: 75%;
}
.hours {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px 0;
  width: 75%;
}
.contact {
  border-bottom: 1px solid black;
  padding: 10px 0;
  width: 75%;
}

/* Mobile Section */
@media (max-width: 991px) {
  .gallery-title {
    top: 78%;
    font-size: 4rem;
  }

  .info-container {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0;
  }

  .banner {
    min-height: 500px;
    padding-bottom: 20px;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    text-align: center;
  }
  .title {
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
  }
  .map-wrap {
    height: 400px;
    width: 100%;
    margin-top: 20px;
  }

  .address {
    width: 100%;
  }
  .hours {
    width: 100%;
  }
  .contact {
    width: 100%;
  }
}
</style>
