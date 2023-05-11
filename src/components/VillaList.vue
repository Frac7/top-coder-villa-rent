<script setup lang="ts">
import type { VillaListProps } from "@/types";
import VillaItem from "./VillaItem.vue";

const props = defineProps<VillaListProps>();
const rows: number = 5;
</script>

<template>
  <div>
    <label for="rows">Righe: </label>
    <select id="rows" v-model="rows">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
    </select>
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
  </div>
</template>

<style scoped></style>
