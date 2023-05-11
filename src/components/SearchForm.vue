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
  <form @submit.prevent="onSubmit" class="flex gap-8 m-[1rem] flex-wrap">
    <div class="flex w-[100%]">
      <h1 class="text-xl text-sky-700">Filtri</h1>
    </div>

    <div class="flex flex-col">
      <label for="location">Città: </label>
      <input
        class="border-b-[1px]"
        type="text"
        name="location"
        id="location"
        v-model="location"
      />
    </div>

    <div class="flex flex-col">
      <label for="price">Prezzo: </label>
      <input
        class="border-b-[1px]"
        type="number"
        name="price"
        id="price"
        v-model="price"
      />
    </div>

    <div class="flex flex-col">
      <label for="capacity">Capacità: </label>
      <input
        class="border-b-[1px]"
        type="number"
        name="capacity"
        id="capacity"
        v-model="capacity"
      />
    </div>

    <div class="flex flex-col">
      <label for="elements">Elementi: </label>
      <select class="border-b-[1px]" id="elements" v-model="elements">
        <option :value="5">5</option>
        <option :value="10">10</option>
        <option :value="15">15</option>
      </select>
    </div>

    <div class="flex w-[100%]">
      <h1 class="text-xl text-sky-700">Ordinamento</h1>
    </div>

    <div class="flex flex-col flex-1">
      <label for="elements">Campo: </label>
      <select class="border-b-[1px]" id="elements" v-model="field">
        <option value="location">Città</option>
        <option value="price">Prezzo</option>
        <option value="capacity">Capacità</option>
      </select>
    </div>

    <div class="flex flex-col flex-1">
      <label for="elements">Direzione: </label>
      <select class="border-b-[1px]" id="elements" v-model="direction">
        <option :value="0">Nessuno</option>
        <option :value="1">Crescente</option>
        <option :value="-1">Decrescente</option>
      </select>
    </div>

    <div class="flex justify-end w-[100%]">
      <button
        type="submit"
        class="rounded-full bg-sky-700 text-white px-[1rem] py-[0.5rem] text-xl"
      >
        Cerca
      </button>
    </div>
  </form>
</template>

<style scoped></style>
