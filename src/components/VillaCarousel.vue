<script setup lang="ts">
import { ref } from "vue";

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
    <img
      :src="`${images?.[currentImage]}?q=${currentImage}`"
      width="500"
      height="500"
    />
    <button class="carousel__button carousel__button__left" @click="onPrevious">
      &lt;
    </button>
    <button class="carousel__button carousel__button__right" @click="onNext">
      &gt;
    </button>
  </div>
</template>

<style scoped lang="scss">
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
