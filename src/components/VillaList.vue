<script setup lang="ts">
import { storeToRefs } from "pinia";

import VillaItem from "./VillaItem.vue";
import { useVillaStore } from "@/stores";

const villaStore = useVillaStore();
const { villas } = storeToRefs(villaStore);
</script>

<template>
  <ul v-if="villas.data.length" class="flex flex-wrap gap-2">
    <li v-for="villa in villas.data" :key="villa.id">
      <VillaItem :villa="villa" />
    </li>
  </ul>
  <span v-else class="text-md text-center text-sky-500">Nessun risultato</span>
</template>
