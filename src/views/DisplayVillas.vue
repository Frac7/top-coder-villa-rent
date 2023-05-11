<script setup lang="ts">
import SearchForm from "@/components/SearchForm.vue";
import VillaList from "@/components/VillaList.vue";
import { useVillaStore } from "@/stores/villa";

const { villas } = useVillaStore();
</script>

<template>
  <main>
    <SearchForm />
    <VillaList :villas="villas" />
  </main>
</template>
