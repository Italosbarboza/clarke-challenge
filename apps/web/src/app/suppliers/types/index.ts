export type Supplier = {
  id: number;
  name: string;
  pricePerKwh: number;
  source: string;
  state: string;
  minKwh: number;
  totalClients: number;
  averageRating: number;
  logo: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  __typename: string;
};
