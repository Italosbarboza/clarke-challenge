'use client';

import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

import { SearchForm } from './molecules/SearchForm';
import { SupplierList } from './organisms/SupplierList';
import { GET_SUPPLIERS } from './graphql/queries';

export default function SuppliersPage() {
  const [hasSearched, setHasSearched] = useState(false);

  const [loadSuppliers, { data, loading, error }] = useLazyQuery(GET_SUPPLIERS);

  const handleSearch = (consumption: number) => {
    setHasSearched(true);
    loadSuppliers({ variables: { input: { consumption } } });
  };

  const handleClear = () => {
    setHasSearched(false);
    loadSuppliers({ variables: { input: { consumption: 0 } } });
  };

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Energy Suppliers</h1>

      <SearchForm onSubmit={handleSearch} onClear={handleClear} />

      {loading && <p>Loading suppliers...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <SupplierList
        suppliers={data?.suppliers ?? []}
        hasSearched={hasSearched}
      />
    </main>
  );
}
