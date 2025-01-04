<template>
  <div class="photos-container">
    <div class="img img-one"></div>
    <div class="img img-two"></div>
    <div class="img img-three"></div>
    <div class="img img-four"></div>
    <div class="img img-five"></div>
    <div class="img img-six"></div>
    <div class="img img-seven"></div>
    <div class="img img-eight"></div>
    <div class="img img-nine"></div>
    <div class="img img-ten"></div>
    <div class="img img-eleven"></div>
    <div class="img img-twelve"></div>
    <div class="img img-thirteen"></div>
    <div class="img img-fourteen"></div>
    <div class="img img-fifteen"></div>
    <div class="img img-sixteen"></div>
    <div class="img img-seventeen"></div>
    <div class="img img-eighteen"></div>
    <div class="img img-nineteen"></div>
    <div class="img img-twenty"></div>
    <div class="img img-twenty-one"></div>
    <div class="img img-twenty-two"></div>
    <div class="img img-twenty-three"></div>
    <div class="img img-twenty-four"></div>
    <div class="img img-twenty-five"></div>
    <div class="img img-twenty-six"></div>
    <div class="img img-twenty-seven"></div>
    <div class="img img-twenty-eight"></div>
    <div class="img img-twenty-nine"></div>
    <div class="img img-thirty"></div>
    <div class="img img-thirty-one"></div>
    <div class="img img-thirty-two"></div>
    <div class="img img-thirty-three"></div>
    <div class="img img-thirty-four"></div>
    <div class="img img-thirty-five"></div>
    <div class="img img-thirty-six"></div>
    <div class="img img-thirty-seven"></div>
    <div class="img img-thirty-eight"></div>
    <div class="img img-thirty-nine"></div>
    <div class="img img-forty"></div>
    <div class="img img-forty-one"></div>
    <div class="img img-forty-two"></div>
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

.photos-container,
p {
  animation: fadeIn 1s ease-in-out;
}

.photos-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  height: 100%;
  width: 100%;
}

.img {
  width: 40%;
  height: 40%;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
}
/* Mobile Section */
@media (max-width: 991px) {
  .photos-container {
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    flex-wrap: nowrap;
    height: 100%;
  }

  .img {
    width: 100%;
    height: auto;
    padding-bottom: 56.25%; /* Keep 16:9 aspect ratio */
  }
}

/* Images */
.img-one {
  background-image: url(../assets/photosPictures/42.jpg);
}
.img-two {
  background-image: url(../assets/photosPictures/41.jpg);
}
.img-three {
  background-image: url(../assets/photosPictures/40.jpg);
}
.img-four {
  background-image: url(../assets/photosPictures/39.jpg);
}
.img-five {
  background-image: url(../assets/photosPictures/38.jpg);
}
.img-six {
  background-image: url(../assets/photosPictures/37.jpg);
}
.img-seven {
  background-image: url(../assets/photosPictures/36.jpg);
}
.img-eight {
  background-image: url(../assets/photosPictures/35.jpg);
}
.img-nine {
  background-image: url(../assets/photosPictures/34.jpg);
}
.img-ten {
  background-image: url(../assets/photosPictures/33.jpg);
}
.img-eleven {
  background-image: url(../assets/photosPictures/32.jpg);
}
.img-twelve {
  background-image: url(../assets/photosPictures/31.jpg);
}
.img-thirteen {
  background-image: url(../assets/photosPictures/30.jpg);
}
.img-fourteen {
  background-image: url(../assets/photosPictures/29.jpg);
}
.img-fifteen {
  background-image: url(../assets/photosPictures/28.jpg);
}
.img-sixteen {
  background-image: url(../assets/photosPictures/27.jpg);
}
.img-seventeen {
  background-image: url(../assets/photosPictures/26.jpg);
}
.img-eighteen {
  background-image: url(../assets/photosPictures/25.jpg);
}
.img-nineteen {
  background-image: url(../assets/photosPictures/24.jpg);
}
.img-twenty {
  background-image: url(../assets/photosPictures/23.jpg);
}
.img-twenty-one {
  background-image: url(../assets/photosPictures/22.jpg);
}
.img-twenty-two {
  background-image: url(../assets/photosPictures/21.jpg);
}
.img-twenty-three {
  background-image: url(../assets/photosPictures/20.jpg);
}
.img-twenty-four {
  background-image: url(../assets/photosPictures/19.jpg);
}
.img-twenty-five {
  background-image: url(../assets/photosPictures/18.jpg);
}
.img-twenty-six {
  background-image: url(../assets/photosPictures/17.jpg);
}
.img-twenty-seven {
  background-image: url(../assets/photosPictures/16.jpg);
}
.img-twenty-eight {
  background-image: url(../assets/photosPictures/15.jpg);
}
.img-twenty-nine {
  background-image: url(../assets/photosPictures/14.jpg);
}
.img-thirty {
  background-image: url(../assets/photosPictures/13.jpg);
}
.img-thirty-one {
  background-image: url(../assets/photosPictures/12.jpg);
}
.img-thirty-two {
  background-image: url(../assets/photosPictures/11.jpg);
}
.img-thirty-three {
  background-image: url(../assets/photosPictures/10.jpg);
}
.img-thirty-four {
  background-image: url(../assets/photosPictures/9.jpg);
}
.img-thirty-five {
  background-image: url(../assets/photosPictures/8.jpg);
}
.img-thirty-six {
  background-image: url(../assets/photosPictures/7.jpg);
}
.img-thirty-seven {
  background-image: url(../assets/photosPictures/6.jpg);
}
.img-thirty-eight {
  background-image: url(../assets/photosPictures/5.jpg);
}
.img-thirty-nine {
  background-image: url(../assets/photosPictures/4.jpg);
}
.img-forty {
  background-image: url(../assets/photosPictures/3.jpg);
}
.img-forty-one {
  background-image: url(../assets/photosPictures/2.jpg);
}
.img-forty-two {
  background-image: url(../assets/photosPictures/1.jpg);
}
</style>
