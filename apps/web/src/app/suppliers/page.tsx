'use client';

import { gql, useLazyQuery } from '@apollo/client';

import { Supplier } from './types';
import { SearchForm } from './molecules/SearchForm';
import { SupplierList } from './organisms/SupplierList';

const GET_SUPPLIERS = gql`
  query GetSuppliers($input: GetSuppliersInput!) {
    suppliers(input: $input) {
      id
      name
      logo
      state
      source
      pricePerKwh
      minKwh
      totalClients
      averageRating
    }
  }
`;

export default function SuppliersPage() {
  const [loadSuppliers, { data, loading, error }] = useLazyQuery(GET_SUPPLIERS);

  const handleSearch = (consumption: number) => {
    loadSuppliers({ variables: { input: { consumption } } });
  };

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Energy Suppliers</h1>

      <SearchForm onSubmit={handleSearch} />

      {loading && <p>Loading suppliers...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {data?.suppliers && <SupplierList suppliers={data.suppliers as Supplier[]} />}
    </main>
  );
}
