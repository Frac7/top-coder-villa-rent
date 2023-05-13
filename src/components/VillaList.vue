<script setup lang="ts">
import type { VillaListProps } from "@/types";
import VillaItem from "./VillaItem.vue";

defineProps<VillaListProps>();
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="villa in data" :key="villa.id">
      <VillaItem :villa="villa" />
    </li>
  </ul>
</template>
