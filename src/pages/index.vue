<template>
  <div class="row justify-content-center align-items-center">
    <div class="frame">
      <div class="window" @click="openLeft = !openLeft">
        <div class="front-back" :class="{'open-left': openLeft }"></div>
        <img src="../assets/images/1-left.png" class="front" :class="{'open-left': openLeft}" />
      </div>
      <div class="window" @click="openRight = !openRight">
        <div class="front-back" :class="{'open-right': openRight }"></div>
        <img src="../assets/images/1-right.png" class="front" :class="{'open-right': openRight}" />
      </div>
    </div>
    <div class="present">
      <div class="content">
        <img
          src="https://dg2kj7uuq7g1w.cloudfront.net/-/media/images/tivoli%20responsiv/shop/kort/aarskort/membership_silver.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createComponent, reactive } from "@vue/composition-api";

export default createComponent({
  setup() {
    const message = reactive("This is not a message");

    return {
      openLeft: false,
      openRight: false
    };
  }
});
</script>

<style lang="scss">
:root {
  --window-height: 600px;
  --window-width: 600px;
}
.present {
  margin-top: calc(var(--window-height) * -1);
  width: var(--window-width);
  height: var(--window-height);
  background-color: #3a4725;

  .content {
    height: 100%;
    width: 100%;
    padding-top: 90px;
    padding-right: 60px;
    padding-left: 0px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.frame {
  display: flex;
  width: var(--window-width);
  height: var(--window-height);
  border: 2px solid #3f3d0a;
  margin-top: 40px;
}
.window {
  flex: 1;
  /* perspective property */
  perspective: 800px;
}
.front {
  margin-top: calc(var(--window-height) * -1);
  width: 100%;
  height: 100%;
  border: 2px solid black;
  backface-visibility: hidden;
  display: flex;
}
.front-back {
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #1b2806;
  border: 5px solid black;
}

.open-left {
  -webkit-animation-name: left-hinge;
  -webkit-animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
}

.open-right {
  -webkit-animation-name: right-hinge;
  -webkit-animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes left-hinge {
  from {
    -webkit-transform: perspective(0) rotateY(0deg);
    -webkit-transform-origin: 0% 0%;
  }
  to {
    -webkit-transform: perspective(0) rotateY(-90deg);
    -webkit-transform-origin: 0% 0%;
  }
}

@-webkit-keyframes right-hinge {
  from {
    -webkit-transform: perspective(0) rotateY(0deg);
    -webkit-transform-origin: 100% 100%;
  }
  to {
    -webkit-transform: perspective(0) rotateY(90deg);
    -webkit-transform-origin: 100% 100%;
  }
}
</style>
