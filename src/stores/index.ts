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

const initialState: VillaState = {
  data: [],
  total: 0,
  size: 0,
  searchParams: {
    location: "",
    price: 0,
    capacity: 0,
    elements: INITIAL_ELEMENTS,
  },
  sortParams: {
    direction: 0,
    field: "",
  },
};

export const useVillaStore = defineStore("villa", {
  state: (): VillaState => {
    const searchParams = Object.assign({}, initialState.searchParams);
    const sortParams = Object.assign({}, initialState.sortParams);
    return {
      ...initialState,
      searchParams,
      sortParams,
    };
  },
  getters: {
    villas: (state: VillaState): Villas => ({
      data: state.data,
      total: state.total,
      size: state.data.length,
    }),
    searchFilters: (state: VillaState): SearchForm => state.searchParams,
    sortFilters: (state: VillaState): Sort => state.sortParams,
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
      this.updateParams({ elements: this.searchParams.elements + offset });
      this.searchVillas();
    },
    resetFilters: function () {
      const newSearchParams = initialState.searchParams;
      const newSortParams = initialState.sortParams;
      this.updateParams(newSearchParams, newSortParams);
    },
  },
});
