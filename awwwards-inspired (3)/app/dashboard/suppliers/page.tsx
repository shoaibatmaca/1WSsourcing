// import { SupplierList } from "@/components/dashboard/supplier-list"

// export default function SuppliersPage() {
//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-2xl font-bold">Suppliers</h1>
//         <p className="text-gray-500 mt-1">Browse and connect with verified suppliers</p>
//       </div>

//       <SupplierList />
//     </div>
//   )
// }

"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSuppliers } from "./suppliers";

export default function SuppliersPage() {
  const { suppliers, loading } = useSuppliers();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <p className="text-gray-500 mt-1">
          Browse and connect with verified suppliers
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Supplier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Loading suppliers...
                </td>
              </tr>
            ) : (
              suppliers.map((supplier: any) => (
                <tr key={supplier.id}>
                  <td className="px-6 py-4">
                    <div className="font-medium">{supplier.name}</div>
                    <div className="text-sm text-gray-500">
                      SUP-{String(supplier.id).padStart(3, "0")}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{supplier.location}</td>
                  <td className="px-6 py-4 text-sm">
                    {supplier.category || "—"}
                  </td>
                  <td className="px-6 py-4 text-sm flex items-center">
                    {supplier.rating?.toFixed(1) || "—"}
                    <Star className="h-4 w-4 text-yellow-500 ml-1" />
                  </td>
                  <td className="px-6 py-4">
                    {supplier.verified ? (
                      <Badge className="bg-green-100 text-green-800">
                        Verified
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Pending
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/dashboard/suppliers/${supplier.id}`}>
                      <Button variant="link" className="text-sm p-0 h-auto">
                        View Profile
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
