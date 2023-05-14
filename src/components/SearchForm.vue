<script setup lang="ts">
import { ref } from "vue";

import type { SearchForm, Sort } from "@/types";
import { useVillaStore } from "@/stores";
import { INITIAL_ELEMENTS } from "@/constants";

const emit = defineEmits<{
  (event: "searchVillas"): void;
}>();

const searchParams = ref<SearchForm>({
  location: "",
  price: 0,
  capacity: 0,
  elements: INITIAL_ELEMENTS,
});

const sortParams = ref<Sort>({
  direction: 0,
});

const { updateParams } = useVillaStore();

const onSubmit = () => {
  updateParams(searchParams.value, sortParams.value);
  emit("searchVillas");
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex gap-8 m-[1rem] flex-wrap">
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
        v-model="searchParams.location"
      />
    </div>

    <div class="flex flex-col flex-1">
      <label for="price">Prezzo: </label>
      <input
        class="border-b-[1px]"
        type="number"
        name="price"
        id="price"
        v-model="searchParams.price"
      />
    </div>

    <div class="flex flex-col flex-1">
      <label for="capacity">Capacità: </label>
      <input
        class="border-b-[1px]"
        type="number"
        name="capacity"
        id="capacity"
        v-model="searchParams.capacity"
      />
    </div>

    <div class="flex flex-col flex-1">
      <label for="elements">Elementi: </label>
      <select
        class="border-b-[1px]"
        id="elements"
        v-model="searchParams.elements"
      >
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
      <select class="border-b-[1px]" id="elements" v-model="sortParams.field">
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
        v-model="sortParams.direction"
      >
        <option :value="0">Nessuno</option>
        <option :value="1">Crescente</option>
        <option :value="-1">Decrescente</option>
      </select>
    </div>

    <div class="flex justify-end w-[100%]">
      <button
        type="submit"
        class="rounded-full bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl"
      >
        Cerca
      </button>
    </div>
  </form>
</template>

<style scoped></style>
