export type SearchFormParams = {
  date?: string;
  city?: string;
  price?: number;
  capacity?: number;
};

export type VillaItemProps = {
  image: string;
  location: string;
  price: number;
  capacity: number;
  facilities: string;
};
