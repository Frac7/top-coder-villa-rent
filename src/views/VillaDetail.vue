<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import router from "@/router";
import type { Villa } from "@/types";
import { getVillaById } from "@/services";

import BookVilla from "@/components/BookVilla.vue";
import VillaCarousel from "@/components/VillaCarousel.vue";
import VillaProperties from "@/components/VillaProperties.vue";

const route = useRoute();
const id = route.params.id as string;

const villa = ref<Villa>();
onMounted(() => {
  villa.value = getVillaById(id);
});

const onBack = () => {
  router.back();
};
</script>

<template>
  <main class="flex flex-col m-auto items-center">
    <button
      @click="onBack"
      class="self-end rounded-full bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl m-[1rem]"
    >
      Indietro
    </button>
    <VillaCarousel :images="villa?.images" />
    <VillaProperties :villa="villa" />
    <BookVilla />
  </main>
</template>

<style scoped>
@media screen and (min-width: 1536px) {
  main {
    width: 50%;
  }
}
</style>
