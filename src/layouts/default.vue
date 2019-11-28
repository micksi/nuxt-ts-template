<template>
  <div>
    <div class="wrapper">
      <div class="background blur"></div>
    </div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<style scoped>
.container {
  z-index: 1;
  font-family: "Open sans", sans-serif;
}

.wrapper {
  z-index: -9999;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: block;
  overflow: hidden;
}

.background {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://www.yourirish.com/wp-content/uploads/2013/11/feature-christmas-777x437.png");
}

.blur {
  filter: blur(10px);
  transform: scale(1.1);
  margin: 0px;
}
</style>
