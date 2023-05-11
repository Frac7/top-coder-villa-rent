export interface SearchFormParams {
  location?: string;
  price?: number;
  capacity?: number;
  elements: number;
}

type Sort = -1 | 0 | 1;
export interface SortParams {
  field?: string;
  direction: Sort;
}

export interface VillaItemProps {
  id: number;
  image: string;
  location: string;
  price: number;
  capacity: number;
  facilities: string;
}

export interface VillaListProps {
  villas: VillaItemProps[];
}
