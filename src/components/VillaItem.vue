<script setup lang="ts">
import router from "@/router";

import type { VillaItem } from "@/types";

import BookVillaVue from "./BookVilla.vue";
import VillaProperties from "./VillaProperties.vue";

const props = defineProps<{ villa: VillaItem }>();

const onShowDetail = () => {
  router.push(`/${props.villa.id}`);
};
</script>

<template>
  <div class="flex flex-col m-[1rem] hover:cursor-pointer">
    <img width="200" :src="villa.image" @click="onShowDetail" />
    <VillaProperties :villa="villa" />
    <BookVillaVue />
  </div>
</template>

<style scoped></style>
