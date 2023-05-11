<script setup lang="ts">
import SearchForm from "@/components/SearchForm.vue";
import VillaList from "@/components/VillaList.vue";
import { ELEMENT_OFFSET, INITIAL_ELEMENTS } from "@/constants";
import { useVillaStore } from "@/stores/villa";
import type { SearchFormParams, SortParams } from "@/types";
import { onMounted } from "vue";

const villaStore = useVillaStore();

const onSearchVillas = (...params: [SearchFormParams, SortParams?]) =>
  villaStore.searchVillas(...params);

const onLoadMore = () => {
  onSearchVillas({
    elements: villaStore.villaList.size + ELEMENT_OFFSET,
  });
};

onMounted(() => {
  onSearchVillas({ elements: INITIAL_ELEMENTS });
});
</script>

<template>
  <main class="flex flex-col w-3/6 m-auto">
    <SearchForm @searchVillas="onSearchVillas" />
    <VillaList
      :total="villaStore.villaList.total"
      :data="villaStore.villaList.data"
    />
    <button
      @click="onLoadMore"
      :disabled="
        villaStore.villaList.data.length === villaStore.villaList.total
      "
    >
      Carica altro
    </button>
  </main>
</template>
