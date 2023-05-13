<script setup lang="ts">
import { onMounted } from "vue";

import SearchForm from "@/components/SearchForm.vue";
import VillaList from "@/components/VillaList.vue";
import { ELEMENT_OFFSET } from "@/constants";
import { useVillaStore } from "@/stores";
import type { SearchForm as SearchFormParams, Sort } from "@/types";

const villaStore = useVillaStore();

const onSearchVillas = (...params: [SearchFormParams?, Sort?]) =>
  villaStore.searchVillas(...params);

const onLoadMore = () => {
  onSearchVillas({
    elements: villaStore.villas.size + ELEMENT_OFFSET,
  });
};

onMounted(() => {
  onSearchVillas();
});
</script>

<template>
  <main class="flex flex-col w-3/6 m-auto items-center">
    <SearchForm @searchVillas="onSearchVillas" />
    <VillaList
      :total="villaStore.villas.total"
      :data="villaStore.villas.data"
    />
    <button
      class="rounded-full disabled:bg-slate-300 bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl m-[1rem]"
      @click="onLoadMore"
      :disabled="villaStore.villas.data.length === villaStore.villas.total"
    >
      Carica altro
    </button>
  </main>
</template>
