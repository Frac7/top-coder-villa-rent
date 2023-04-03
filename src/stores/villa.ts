import type { SearchFormParams } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useVillaStore = defineStore("villa", () => {
  const villas = ref([]);

  const getVillas = computed(() => villas.value);

  function searchVillas(params?: SearchFormParams) {
    villas.value = [];
  }

  return { villas, getVillas, searchVillas };
});
