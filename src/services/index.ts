import { villas } from "@/data";
import type { SearchFormParams, SortParams, VillaListProps } from "@/types";

export const getVillas = (
  searchFormParams: SearchFormParams,
  sortParams?: SortParams
): Promise<VillaListProps> => {
  return new Promise((resolve) => {
    const { location, price, capacity, elements } = searchFormParams;
    const { field, direction } = sortParams || {};

    const filtered = villas.filter((villa) => {
      const sameLocation = !location || villa.location === location;
      const samePrice = !price || villa.price === price;
      const sameCapacity = !capacity || villa.capacity === capacity;
      return sameLocation && samePrice && sameCapacity;
    });

    if (direction) {
      filtered.sort((villaA, villaB) => {
        // @ts-ignore
        if (villaA[field] > villaB[field]) {
          return direction;
        }
        // @ts-ignore
        if (villaA[field] < villaB[field]) {
          return -direction;
        }
        return 0;
      });
    }

    const total = filtered.length;
    const data = filtered.slice(0, elements);

    resolve({
      data,
      total,
    });
  });
};
