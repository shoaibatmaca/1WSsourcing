import { RecentOrders } from "@/components/dashboard/recent-orders";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Orders</h1>
        <p className="text-gray-500 mt-1">Manage and track your orders</p>
      </div>

      <RecentOrders />
    </div>
  );
}
