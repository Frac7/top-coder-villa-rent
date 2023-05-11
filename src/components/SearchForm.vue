<script setup lang="ts">
import type { SearchFormParams } from "@/types";
import { ref } from "vue";

const emit = defineEmits<{
  (event: "searchVillas", payload: SearchFormParams): void;
}>();

const location = ref<string>("");
const price = ref<number>(0);
const capacity = ref<number>(0);
const elements = ref<number>(5);

const onSubmit = () => {
  emit("searchVillas", {
    location: location.value,
    price: price.value,
    capacity: capacity.value,
    elements: elements.value,
  });
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

    <button type="submit">Cerca</button>
  </form>
</template>

<style scoped></style>
