<script setup lang="ts">
import type { Direction, Field, SearchFormParams, SortParams } from "@/types";
import { ref } from "vue";

const emit = defineEmits<{
  (
    event: "searchVillas",
    searchFormParams: SearchFormParams,
    sortParams: SortParams
  ): void;
}>();

const location = ref<string>("");
const price = ref<number>(0);
const capacity = ref<number>(0);

const elements = ref<number>(5);

const direction = ref<Direction>(0);
const field = ref<Field | undefined>(undefined);

const onSubmit = () => {
  emit(
    "searchVillas",
    {
      location: location.value,
      price: price.value,
      capacity: capacity.value,
      elements: elements.value,
    },
    { direction: direction.value, field: field.value }
  );
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="location">Città: </label>
    <input type="text" name="location" id="location" v-model="location" />

    <label for="price">Prezzo: </label>
    <input type="number" name="price" id="price" v-model="price" />

    <label for="capacity">Capacità: </label>
    <input type="number" name="capacity" id="capacity" v-model="capacity" />

    <label for="elements">Elementi: </label>
    <select id="elements" v-model="elements">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
    </select>

    <span>Ordinamento</span>
    <label for="elements">Campo: </label>
    <select id="elements" v-model="field">
      <option value="location">Città</option>
      <option value="price">Prezzo</option>
      <option value="capacity">Capacità</option>
    </select>
    <label for="elements">Direzione: </label>
    <select id="elements" v-model="direction">
      <option :value="0">Nessuno</option>
      <option :value="1">Crescente</option>
      <option :value="-1">Decrescente</option>
    </select>

    <button type="submit">Cerca</button>
  </form>
</template>

<style scoped></style>
