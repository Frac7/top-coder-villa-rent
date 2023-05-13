import type { SearchFormParams, SortParams, VillaItem } from "@/types";
import { getVillas as getVillaList } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import { INITIAL_ELEMENTS } from "@/constants";

export const useVillaStore = defineStore("villa", () => {
  const villas = ref<VillaItem[]>([]);

  const currentElements = ref<number>(0);
  const totalElements = ref<number>(0);

  const currentSearchParams = ref<SearchFormParams>({
    elements: INITIAL_ELEMENTS,
  });
  const currentSortParams = ref<SortParams>();

  function updateParams(
    searchParams?: SearchFormParams,
    sortParams?: SortParams
  ) {
    if (searchParams) {
      currentSearchParams.value = {
        ...currentSearchParams.value,
        ...searchParams,
      };
    }
    if (sortParams) {
      currentSortParams.value = {
        ...currentSortParams.value,
        ...sortParams,
      };
    }
  }

  async function searchVillas(
    searchParams?: SearchFormParams,
    sortParams?: SortParams
  ) {
    updateParams(searchParams, sortParams);

    const villaList = await getVillaList(
      currentSearchParams.value,
      currentSortParams.value
    );
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
