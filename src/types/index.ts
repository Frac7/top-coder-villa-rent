export type SearchFormParams = {
  date?: string;
  city?: string;
  price?: number;
  capacity?: number;
};

export type VillaItemProps = {
  id: number;
  image: string;
  location: string;
  price: number;
  capacity: number;
  facilities: string;
};

export type VillaListProps = {
  villas: VillaItemProps[];
};
