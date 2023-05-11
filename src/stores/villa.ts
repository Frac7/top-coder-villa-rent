import type { SearchFormParams, SortParams, VillaItemProps } from "@/types";
import { getVillas as getVillaList } from "@/services";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useVillaStore = defineStore("villa", () => {
  const villas = ref<VillaItemProps[]>([]);

  const getVillas = computed(() => villas.value);

  async function searchVillas(
    searchParams: SearchFormParams,
    sortParams?: SortParams
  ) {
    const villaList = await getVillaList(searchParams, sortParams);
    villas.value = villaList.villas;
  }

  return { villas, getVillas, searchVillas };
});
