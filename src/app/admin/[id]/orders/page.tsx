"use client";

import { useEffect, useState } from "react";

type Order = any;

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const res = await fetch("/api/admin/orders");
    const data = await res.json();
    setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateOrder = async (id: string, status?: string, paymentStatus?: string) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status, paymentStatus }),
    });

    fetchOrders();
  };

  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Orders</h1>
      <p className="text-gray-600">You have {orders.length} orders.</p>
      <hr className="border-gray-200" />

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow rounded-2xl p-4 space-y-4">
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <p className="font-semibold">Order #{order.orderNumber}</p>
                <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-100">{order.status}</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100">{order.paymentStatus}</span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="text-sm">
              <p>
                <strong>Name:</strong> {order.user?.name}
              </p>
              <p>
                <strong>Email:</strong> {order.email}
              </p>
              <p>
                <strong>Phone:</strong> {order.phone}
              </p>
            </div>

            {/* Shipping Address */}
            <div className="text-sm">
              <strong>Shipping Address:</strong>
              <pre className="bg-gray-50 p-2 rounded text-xs overflow-auto">
                {JSON.stringify(order.shippingAddress, null, 2)}
              </pre>
            </div>

            {/* Items */}
            <div className="space-y-2">
              <strong>Items:</strong>
              {order.items.map((item: any) => (
                <div key={item.id} className="flex gap-4 items-center border rounded-lg p-2">
                  {item.image && <img src={item.image} className="w-16 h-16 object-cover rounded" />}
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <div className="font-semibold">${item.quantity * item.price}</div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="text-sm space-y-1">
              <p>Subtotal: ${order.subtotal}</p>
              <p>Tax: ${order.tax}</p>
              <p>Shipping: ${order.shippingFee}</p>
              <p className="font-bold text-lg">Total: ${order.total}</p>
            </div>

            {/* Admin Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => updateOrder(order.id, "PROCESSING")}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Mark Processing
              </button>

              <button
                onClick={() => updateOrder(order.id, "SHIPPED")}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Mark Shipped
              </button>

              <button
                onClick={() => updateOrder(order.id, "DELIVERED")}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Mark Delivered
              </button>

              <button
                onClick={() => updateOrder(order.id, "CANCELLED")}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Cancel Order
              </button>

              <button
                onClick={() => updateOrder(order.id, undefined, "PAID")}
                className="px-3 py-1 bg-indigo-600 text-white rounded"
              >
                Mark Paid
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
