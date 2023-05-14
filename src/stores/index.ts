import { defineStore } from "pinia";

import type { SearchForm, Sort, Villa, Villas } from "@/types";
import { getVillas as getVillaList } from "@/services";
import { INITIAL_ELEMENTS } from "@/constants";

interface VillaState {
  data: Villa[];
  total: number;
  size: number;
  sortParams: Sort;
  searchParams: SearchForm;
}

export const useVillaStore = defineStore("villa", {
  state: (): VillaState => ({
    data: [],
    total: 0,
    size: 0,
    searchParams: {
      elements: INITIAL_ELEMENTS,
    },
    sortParams: {
      direction: 0,
      field: "",
    },
  }),
  getters: {
    villas: (state: VillaState): Villas => ({
      data: state.data,
      total: state.total,
      size: state.data.length,
    }),
    filters: (
      state: VillaState
    ): {
      searchParams: SearchForm;
      sortParams: Sort;
    } => ({
      searchParams: state.searchParams,
      sortParams: state.sortParams,
    }),
  },
  actions: {
    updateParams: function (
      newSearchParams?: SearchForm,
      newSortParams?: Sort
    ) {
      if (newSearchParams) {
        this.searchParams = {
          ...this.searchParams,
          ...newSearchParams,
        };
      }
      if (newSortParams) {
        this.sortParams = {
          ...this.sortParams,
          ...newSortParams,
        };
      }
    },
    searchVillas: function () {
      const { data, total } = getVillaList(this.searchParams, this.sortParams);
      this.data = data;
      this.size = data.length;
      this.total = total;
    },
    loadMore: function (offset: number) {
      this.updateParams({ elements: this.size + offset });
      this.searchVillas();
    },
  },
});
