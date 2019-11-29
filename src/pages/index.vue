<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <div>
        <div class="frame">
          <div class="door" @click="openLeft = !openLeft">
            <div :class="{'open-left': openLeft }"></div>
            <img src="../assets/images/1-left.png" :class="{'open-left': openLeft}" />
          </div>
          <div class="door" @click="openRight = !openRight">
            <div :class="{'open-right': openRight }"></div>
            <img src="../assets/images/1-right.png" :class="{'open-right': openRight}" />
          </div>
        </div>
        <div class="present">
          <div
            class="content"
            :style="{'display': openLeft && openRight ? 'inline-block':'none'}"
            :class="{'fade-in': openLeft && openRight}"
          >
            <img
              src="https://dg2kj7uuq7g1w.cloudfront.net/-/media/images/tivoli%20responsiv/shop/kort/aarskort/membership_silver.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center text-white">
      <br />
      <h1
        :style="{'display': openLeft && openRight ? 'inline-block':'none'}"
        :class="{'fade-in': openLeft && openRight}"
      >
        <strong>Glædelig første advent</strong>
      </h1>
    </div>
    <div class="winter-is-coming">
      <div class="snow snow--near"></div>
      <div class="snow snow--near snow--alt"></div>

      <div class="snow snow--mid"></div>
      <div class="snow snow--mid snow--alt"></div>

      <div class="snow snow--far"></div>
      <div class="snow snow--far snow--alt"></div>
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

<style scoped lang="scss">
@import "@/assets/_variables.scss";
h1 {
  font-family: "Mountains of Christmas", cursive;
}

.frame {
  display: flex;
  width: var(--calendar-door-width);
  height: var(--calendar-door-height);
  border: 2px solid #3f3d0a;
  margin-top: 40px;

  .door {
    flex: 1;
    width: 50%;
    /* perspective property */
    perspective: 1200px;
    div {
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: #1b2806;
      border: 5px solid black;
    }
    img {
      margin-top: calc(var(--calendar-door-width) * -1);
      width: 100%;
      height: 100%;
      border: 2px solid black;
      backface-visibility: hidden;
      display: flex;
    }
  }
}

.present {
  margin-top: calc(var(--calendar-door-height) * -1);
  width: var(--calendar-door-width);
  height: var(--calendar-door-height);
  background-color: #3a4725;
  z-index: -99;

  .content {
    z-index: -99;
    height: 100%;
    width: 100%;
    padding-top: 80px;
    padding-right: 40px;
    padding-left: 0px;
    display: none;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
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

.fade-in {
  -webkit-animation: fadein 7s; /* Safari, Chrome and Opera > 12.1 */
  -webkit-animation-timing-function: cubic-bezier(1, -0.4, 0.7, 0.6);
  -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

$s--near: 10s;
$s--mid: ($s--near * 2);
$s--far: ($s--near * 3);

$ease--out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

%on-top {
  z-index: 100;
  pointer-events: none;
}

.winter-is-coming {
  @extend %on-top;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.snow {
  @extend %on-top;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: falling linear infinite both;
  transform: translate3D(0, -100%, 0);

  &--near {
    animation-duration: $s--near;
    background-image: url("https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png");
    background-size: contain;

    & + .snow--alt {
      animation-delay: ($s--near / 2);
    }
  }

  &--mid {
    animation-duration: $s--mid;
    background-image: url("https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png");
    background-size: contain;

    & + .snow--alt {
      animation-delay: ($s--mid / 2);
    }
  }

  &--far {
    animation-duration: $s--far;
    background-image: url("https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png");
    background-size: contain;

    & + .snow--alt {
      animation-delay: ($s--far / 2);
    }
  }
}

@keyframes falling {
  0% {
    transform: translate3D(-7.5%, -100%, 0);
  }

  100% {
    transform: translate3D(7.5%, 100%, 0);
  }
}
</style>
