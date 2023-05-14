export interface SearchForm {
  location?: string;
  price?: number;
  capacity?: number;
  elements: number;
}

export type Direction = -1 | 0 | 1;
export type Field = "" | "location" | "price" | "capacity";
export interface Sort {
  field: Field;
  direction: Direction;
}

export interface Villa {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  capacity: number;
  facilities: string;
  images: string[];
}

export interface Villas {
  data: Villa[];
  total: number;
  size: number;
}
