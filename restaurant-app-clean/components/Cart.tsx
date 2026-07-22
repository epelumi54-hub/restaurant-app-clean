"use client";

import { useState } from "react";
import PayButton from "./PayButton";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg w-64 border border-gray-700">

      <h2 className="font-bold mb-2">🛒 Cart</h2>
      <h3 className="mt-4 text-lg font-bold">
        Total: ₦{total}
      </h3>
      <PayButton total={total} />

      <button className="mt-4 bg-green-600 px-4 py-2 rounded">
        Checkout
      </button>

      {cart.length === 0 ? (
        <p className="text-sm text-gray-400">No items yet</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>
                ₦{item.price * item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="text-xs text-gray-500">
        {cart.length} item(s)
      </p>

    </div>
  );
}