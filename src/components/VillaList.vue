<script setup lang="ts">
import type { VillaListProps } from "@/types";
import VillaItem from "./VillaItem.vue";

const props = defineProps<VillaListProps>();
</script>

<template>
  <ul>
    <li v-for="villa in props.villas" :key="villa.id">
      <VillaItem
        :id="villa.id"
        :image="villa.image"
        :location="villa.location"
        :price="villa.price"
        :capacity="villa.capacity"
        :facilities="villa.facilities"
      />
    </li>
  </ul>
  <button>Carica altro</button>
</template>

<style scoped></style>
