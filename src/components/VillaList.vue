<script setup lang="ts">
import type { VillaListProps } from "@/types";
import VillaItem from "./VillaItem.vue";

const props = defineProps<VillaListProps>();
</script>

<template>
  <ul>
    <li v-for="villa in props.data" :key="villa.id">
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
</template>

<style scoped></style>
