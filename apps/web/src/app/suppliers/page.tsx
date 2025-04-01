'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SupplierList } from "./organisms/SupplierList";
import { GET_SUPPLIERS } from "./graphql/queries";
import { useLazyQuery } from "@apollo/client";

export default function SuppliersPage() {
  const [value, setValue] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [loadSuppliers, { data, loading, error }] = useLazyQuery(GET_SUPPLIERS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const consumption = parseFloat(value);
    if (!isNaN(consumption) && consumption >= 0) {
      setHasSearched(true);
      loadSuppliers({ variables: { input: { consumption } } });
    }
  };

  const handleClear = () => {
    setHasSearched(false);
    setValue('');
    loadSuppliers({ variables: { input: { consumption: 0 } } });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="w-full px-6 py-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-semibold">Clarke - Energy Suppliers</h1>
      </header>

      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Search Energy Suppliers</h2>

        <form onSubmit={handleSubmit} className="flex gap-2 items-end mb-6">
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type your consumption in kWh"
            min={0}
          />
          <Button type="submit">Search</Button>
          <Button type="button" variant="outline" onClick={handleClear}>
            Clear
          </Button>
        </form>

        {loading && <p className="text-gray-500">Loading suppliers...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}

        <SupplierList
          suppliers={data?.suppliers ?? []}
          hasSearched={hasSearched}
        />
      </main>
    </div>
  );
}
