<script setup lang="ts">
import { useVillaStore } from "@/stores";
import { storeToRefs } from "pinia";

const villaStore = useVillaStore();
const { filters } = storeToRefs(villaStore);
</script>

<template>
  <div class="flex w-[100%]">
    <h1 class="text-xl text-sky-700">Ordinamento</h1>
  </div>

  <div class="flex flex-col flex-1">
    <label for="elements">Campo: </label>
    <select
      class="border-b-[1px]"
      id="elements"
      v-model="filters.sortParams.field"
    >
      <option :value="''"></option>
      <option value="location">Città</option>
      <option value="price">Prezzo</option>
      <option value="capacity">Capacità</option>
    </select>
  </div>

  <div class="flex flex-col flex-1">
    <label for="elements">Direzione: </label>
    <select
      class="border-b-[1px]"
      id="elements"
      v-model="filters.sortParams.direction"
    >
      <option :value="0"></option>
      <option :value="1">Crescente</option>
      <option :value="-1">Decrescente</option>
    </select>
  </div>
</template>

<style scoped></style>
