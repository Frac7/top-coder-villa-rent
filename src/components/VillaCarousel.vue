<script setup lang="ts">
import { useCarousel } from "@/utils/useCarousel";

const props = defineProps<{ images: string[] }>();
const { currentImage, onPrevious, onNext } = useCarousel(props);
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
