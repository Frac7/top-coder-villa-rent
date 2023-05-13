export interface SearchFormParams {
  location?: string;
  price?: number;
  capacity?: number;
  elements: number;
}

export type Direction = -1 | 0 | 1;
export type Field = "location" | "price" | "capacity";
export interface SortParams {
  field?: Field;
  direction: Direction;
}

export interface VillaItemProps {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  capacity: number;
  facilities: string;
  images: string[];
}

export interface VillaListProps {
  data: VillaItemProps[];
  total: number;
}
