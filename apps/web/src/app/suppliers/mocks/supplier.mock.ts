import { Supplier } from "../types";

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: 'Energia Solar BR',
    logo: 'https://via.placeholder.com/100x100.png?text=Solar+BR',
    state: 'SP',
    source: 'solar',
    pricePerKwh: 0.47,
    minKwh: 1000,
    totalClients: 500,
    averageRating: 4.5,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    deletedAt: null,
    __typename: ''
  },
  {
    id: 2,
    name: 'Eólica Sul',
    logo: 'https://via.placeholder.com/100x100.png?text=Eolica+Sul',
    state: 'RS',
    source: 'eólica',
    pricePerKwh: 0.53,
    minKwh: 2000,
    totalClients: 300,
    averageRating: 4.2,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    deletedAt: null,
    __typename: ''
  },
];