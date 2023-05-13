<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import router from "@/router";
import type { VillaItemProps } from "@/types";
import { getVillaById } from "@/services";
import BookVilla from "@/components/BookVilla.vue";
import VillaCarousel from "@/components/VillaCarousel.vue";

const route = useRoute();
const id = route.params.id as string;

const villa = ref<VillaItemProps>();
onMounted(() => {
  villa.value = getVillaById(id);
});

const onBack = () => router.back();
</script>

<template>
  <main class="flex flex-col w-3/6 m-auto items-center">
    <div class="flex justify-between items-center w-[100%]">
      <h2 class="text-xl text-sky-500">{{ villa?.name }}</h2>
      <button
        @click="onBack"
        class="rounded-full bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl"
      >
        Indietro
      </button>
    </div>
    <VillaCarousel v-if="villa" :images="villa.images" />
    <BookVilla />
  </main>
</template>
