import type { SearchFormParams, SortParams, VillaItemProps } from "@/types";
import { getVillas as getVillaList } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useVillaStore = defineStore("villa", () => {
  const villas = ref<VillaItemProps[]>([]);
  const currentElements = ref<number>(0);
  const totalElements = ref<number>(0);

  async function searchVillas(
    searchParams: SearchFormParams,
    sortParams?: SortParams
  ) {
    const villaList = await getVillaList(searchParams, sortParams);
    villas.value = villaList.data;
    currentElements.value = villaList.data.length;
    totalElements.value = villaList.total;
  }

  const villaList = computed(() => ({
    data: villas.value,
    total: totalElements.value,
    size: currentElements.value,
  }));

  return { villas, currentElements, searchVillas, totalElements, villaList };
});
