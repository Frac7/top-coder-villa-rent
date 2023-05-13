<script setup lang="ts">
import router from "@/router";

import type { VillaItemProps } from "@/types";

const props = defineProps<VillaItemProps>();

const onShowDetail = () => {
  router.push(`/${props.id}`);
};
</script>

<template>
  <div @click="onShowDetail" class="flex flex-col m-[1rem]">
    <img width="200" :src="props.image" />
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
      <!-- <button>Prenota</button> TODO: Handle modal -->
    </div>
  </div>
</template>

<style scoped></style>
