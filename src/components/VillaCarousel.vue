<script setup lang="ts">
import { ref, Transition } from "vue";

const props = defineProps<{ images: string[] }>();
const currentImage = ref(0);

const interval = setInterval(() => {
  currentImage.value =
    currentImage.value + 1 === props.images.length ? 0 : currentImage.value + 1;
}, 5000);

const onPrevious = () => {
  clearInterval(interval);
  currentImage.value =
    currentImage.value - 1 < 0
      ? props.images.length - 1
      : currentImage.value - 1;
};
const onNext = () => {
  clearInterval(interval);
  currentImage.value =
    currentImage.value + 1 === props.images.length ? 0 : currentImage.value + 1;
};
</script>

<template>
  <div class="h-[500px] w-[500px] my-[1rem]">
    <Transition appear name="slide-fade">
      <img
        :key="currentImage"
        :src="`${images?.[currentImage]}?q=${currentImage}`"
        width="500"
        height="500"
    /></Transition>
    <button class="carousel__button carousel__button__left" @click="onPrevious">
      &lt;
    </button>
    <button class="carousel__button carousel__button__right" @click="onNext">
      &gt;
    </button>
  </div>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.1s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.carousel {
  &__button {
    color: white;
    position: relative;
    bottom: 50%;
    font-size: xx-large;
    &__left {
      left: 5%;
    }
    &__right {
      left: 85%;
    }
  }
}
</style>
