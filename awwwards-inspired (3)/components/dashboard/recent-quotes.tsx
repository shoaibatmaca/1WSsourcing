"use client";

import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "approved":
      return "bg-green-100 text-green-800"
    case "rejected":
      return "bg-red-100 text-red-800"
    case "expired":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function RecentQuotes() {
  const [quotes, setQuotes] = useState<any[]>([])

  useEffect(() => {
    const fetchQuotes = async () => {
      const token = localStorage.getItem("accessToken")
      const res = await fetch("http://localhost:8000/quotes/my/", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })

      if (res.ok) {
        const data = await res.json()
        setQuotes(data)
      } else {
        console.error("Failed to fetch quotes")
      }
    }

    fetchQuotes()
  }, [])

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Quotes</h2>
        <Link href="/dashboard/quotes">
          <Button variant="outline" size="sm" className="rounded-full">View All</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Quote ID</th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {quotes.map((quote) => (
              <tr key={quote.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{quote.quote_number}</td>
                <td className="px-6 py-4 text-sm">{quote.product_name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(quote.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">
                  <Badge className={`${getStatusColor(quote.status)} border-0`}>
                    {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm">{quote.quantity} units</td>
                <td className="px-6 py-4 text-sm text-right">
                  <Link href={`/dashboard/quotes/${quote.id}`} className="text-black hover:underline">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
