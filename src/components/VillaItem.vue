<script setup lang="ts">
import router from "@/router";

import type { VillaItemProps } from "@/types";
import BookVillaVue from "./BookVilla.vue";

const props = defineProps<VillaItemProps>();

const onShowDetail = () => {
  router.push(`/${props.id}`);
};
</script>

<template>
  <div class="flex flex-col m-[1rem] hover:cursor-pointer">
    <img width="200" :src="props.image" @click="onShowDetail" />
    <div class="flex flex-col gap-1 text-center">
      <span><b>Città:</b> {{ props.location }}</span>
      <span>
        <b>Prezzo:</b>
        {{
          Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(props.price)
        }}
      </span>
      <span>
        <b>Capacità:</b>
        {{ props.capacity }}
      </span>
      <span>
        <b>Servizi:</b>
        {{ props.facilities }}
      </span>
    </div>
    <BookVillaVue :villa="props.id" />
  </div>
</template>

<style scoped></style>
