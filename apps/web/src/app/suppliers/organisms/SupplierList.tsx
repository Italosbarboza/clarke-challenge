'use client';

import { Supplier } from "../types";

type Props = {
  suppliers: Supplier[];
};

export function SupplierList({ suppliers }: Props) {
  return (
    <ul className="grid gap-4 mt-6">
      {suppliers.map((s) => (
        <li key={s.id} className="p-4 border rounded shadow-sm">
          <div className="flex items-center gap-4">
            {s.logo && (
              <img
                src={s.logo}
                alt={s.name}
                className="w-16 h-16 object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
            <div>
              <h2 className="text-lg font-semibold">{s.name}</h2>
              <p>
                <strong>R${s.pricePerKwh}</strong>/kWh – {s.source} – {s.state}
              </p>
              <p className="text-sm text-gray-600">
                Clients: {s.totalClients} – Rating: {s.averageRating}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
