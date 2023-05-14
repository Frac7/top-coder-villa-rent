<script setup lang="ts">
import { useVillaStore } from "@/stores";
import { storeToRefs } from "pinia";

const villaStore = useVillaStore();
const { filters } = storeToRefs(villaStore);
</script>

<template>
  <div class="flex w-[100%]">
    <h1 class="text-xl text-sky-700">Filtri</h1>
  </div>

  <div class="flex flex-col flex-1">
    <label for="location">Città: </label>
    <input
      class="border-b-[1px]"
      type="text"
      name="location"
      id="location"
      v-model="filters.searchParams.location"
    />
  </div>

  <div class="flex flex-col flex-1">
    <label for="price">Prezzo: </label>
    <input
      class="border-b-[1px]"
      type="number"
      name="price"
      id="price"
      v-model="filters.searchParams.price"
    />
  </div>

  <div class="flex flex-col flex-1">
    <label for="capacity">Capacità: </label>
    <input
      class="border-b-[1px]"
      type="number"
      name="capacity"
      id="capacity"
      v-model="filters.searchParams.capacity"
    />
  </div>

  <div class="flex flex-col flex-1">
    <label for="elements">Elementi: </label>
    <select
      class="border-b-[1px]"
      id="elements"
      v-model="filters.searchParams.elements"
    >
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
    </select>
  </div>
</template>

<style scoped></style>
