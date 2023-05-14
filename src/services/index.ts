import { villas } from "@/data";
import type { SearchForm, Sort, Villa, Villas } from "@/types";

export const getVillaById = (id: string): Villa | undefined => {
  return villas.find((villa) => villa.id === id);
};

export const getVillas = (
  searchFormParams: SearchForm,
  sortParams?: Sort
): Villas => {
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

  return {
    data,
    total,
  };
};
