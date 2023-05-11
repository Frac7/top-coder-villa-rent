<script setup lang="ts">
import SearchForm from "@/components/SearchForm.vue";
import VillaList from "@/components/VillaList.vue";
import { useVillaStore } from "@/stores/villa";
import type { SearchFormParams } from "@/types";
import { onMounted } from "vue";

const villaStore = useVillaStore();

onMounted(() => {
  villaStore.searchVillas({ elements: 5 });
});

const onSearchVillas = ({
  location,
  price,
  capacity,
  elements,
}: SearchFormParams) => {
  villaStore.searchVillas({
    location,
    price,
    capacity,
    elements,
  });
};
</script>

<template>
  <main>
    <SearchForm @searchVillas="onSearchVillas" />
    <VillaList :villas="villaStore.villas" />
  </main>
</template>
