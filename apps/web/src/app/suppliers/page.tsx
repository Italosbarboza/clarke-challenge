'use client';

import { useLazyQuery } from '@apollo/client';

import { Supplier } from './types';
import { SearchForm } from './molecules/SearchForm';
import { SupplierList } from './organisms/SupplierList';
import { GET_SUPPLIERS } from './graphql/queries';


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
