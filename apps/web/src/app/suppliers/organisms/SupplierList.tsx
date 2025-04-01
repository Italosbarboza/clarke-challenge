'use client';

import { Plug } from "lucide-react";
import { useState } from "react";
import { Supplier } from "../types";

type Props = {
  suppliers: Supplier[];
  hasSearched: boolean;
};

export function SupplierList({ suppliers, hasSearched }: Props) {
  if (!hasSearched) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
        <p>Please enter your consumption to search for suppliers.</p>
      </div>
    );
  }

  if (suppliers.length === 0) {
    return (
      <p className="mt-6 text-center text-gray-500">
        No suppliers found.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 mt-6">
      {suppliers.map((s) => (
        <SupplierItem key={s.id} supplier={s} />
      ))}
    </ul>
  );
}

type SupplierItemProps = {
  supplier: Supplier;
};

function SupplierItem({ supplier }: SupplierItemProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <li className="p-4 border rounded shadow-sm">
      <div className="flex items-center gap-4">
        {!imageError && supplier.logo ? (
          <img
            src={supplier.logo}
            alt={supplier.name}
            className="w-16 h-16 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
            <Plug className="w-8 h-8 text-gray-400" />
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold">{supplier.name}</h2>
          <p>
            <strong>R${supplier.pricePerKwh}</strong>/kWh – {supplier.source} – {supplier.state}
          </p>
          <p className="text-sm text-gray-600">
            Clients: {supplier.totalClients} – Rating: {supplier.averageRating}
          </p>
        </div>
      </div>
    </li>
  );
}
