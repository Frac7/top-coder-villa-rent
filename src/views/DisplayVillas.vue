<script setup lang="ts">
import { onMounted } from "vue";

import SearchForm from "@/components/SearchForm.vue";
import VillaList from "@/components/VillaList.vue";
import { ELEMENT_OFFSET } from "@/constants";
import { useVillaStore } from "@/stores";

const villaStore = useVillaStore();
const { searchVillas, loadMore } = villaStore;

const onLoadMore = () => {
  loadMore(ELEMENT_OFFSET);
};

onMounted(() => {
  searchVillas();
});
</script>

<template>
  <main class="flex flex-col m-auto items-center">
    <SearchForm @searchVillas="searchVillas" />
    <VillaList />
    <button
      class="rounded-full disabled:bg-slate-300 bg-sky-700 text-white px-[1rem] pt-[0.25rem] pb-[0.5rem] text-xl m-[1rem]"
      @click="onLoadMore"
      :disabled="villaStore.villas.data.length === villaStore.villas.total"
    >
      Carica altro
    </button>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1536px) {
  main {
    width: 50%;
  }
}
</style>
