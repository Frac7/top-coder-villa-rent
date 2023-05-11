import type { SearchFormParams, SortParams, VillaListProps } from "@/types";
import { villas } from "@/data";

export const getVillas = (
  searchFormParams: SearchFormParams,
  sortParams?: SortParams
): Promise<VillaListProps> => {
  return new Promise((resolve) => {
    const { location, price, capacity, elements } = searchFormParams;
    const { field, direction } = sortParams || {};

    const result = villas.filter((villa) => {
      const sameLocation = !location || villa.location === location;
      const samePrice = !price || villa.price === price;
      const sameCapacity = !capacity || villa.capacity === capacity;
      return sameLocation && samePrice && sameCapacity;
    });

    if (direction) {
      result.sort((villaA, villaB) => {
        // @ts-ignore
        const comparison = villaA[field].localeCompare(villaB[field]);
        return direction * comparison;
      });
    }

    result.slice(0, elements);

    resolve({
      villas: result,
    });
  });
};
