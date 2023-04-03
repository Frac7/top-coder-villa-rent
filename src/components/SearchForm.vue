<script setup lang="ts">
import { useVillaStore } from "@/stores/villa";
const { searchVillas } = useVillaStore();

const onSubmit = (event: Event) => {
  const form = event.target as HTMLFormElement;
  searchVillas({
    date: form?.date?.value,
    city: form?.city?.value,
    price: form?.price?.value,
    capacity: form?.capacity?.value,
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="date">Data: </label>
    <input type="date" name="date" id="date" />

    <label for="city">Città: </label>
    <input type="text" name="city" id="city" />

    <label for="price">Prezzo: </label>
    <input type="number" name="price" id="price" />

    <label for="capacity">Capacità: </label>
    <input type="number" name="capacity" id="capacity" />

    <button type="submit">Cerca</button>
  </form>
</template>

<style scoped></style>
