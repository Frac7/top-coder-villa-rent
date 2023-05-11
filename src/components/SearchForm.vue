<script setup lang="ts">
import { useVillaStore } from "@/stores/villa";
const { searchVillas } = useVillaStore();

const date: string = new Date().toISOString().substring(0, 10);
const city: string = "";
const price: number = 0;
const capacity: number = 0;

const onSubmit = () => {
  searchVillas({
    date,
    city,
    price,
    capacity,
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="date">Data: </label>
    <input type="date" name="date" id="date" v-model="date" />

    <label for="city">Città: </label>
    <input type="text" name="city" id="city" v-model="city" />

    <label for="price">Prezzo: </label>
    <input type="number" name="price" id="price" v-model="price" />

    <label for="capacity">Capacità: </label>
    <input type="number" name="capacity" id="capacity" v-model="capacity" />

    <button type="submit">Cerca</button>
  </form>
</template>

<style scoped></style>
