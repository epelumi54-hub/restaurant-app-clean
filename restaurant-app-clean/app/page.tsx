"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import PayButton from "@/components/PayButton";
import { useState } from "react";

export default function Home() {
  type CartItem = {
    name: string;
    price: number;
    quantity: number;
  };

  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (item: { name: string; price: number }) => {
    setCart((prev: CartItem[]) => {
      const existingItem = prev.find((i: CartItem) => i.name === item.name);

      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const decreaseQuantity = (name: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const increaseQuantity = (name: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const removeItem = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu addToCart={addToCart} />
      <div className="p-6 bg-blac text-white">
        <h2 className="text-xl font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              {item.name} x{item.quantity}
            </span>

            <div className="flex gap-2">
              <button onClick={() => decreaseQuantity(item.name)}>
                ➖
              </button>
              <button onClick={() => increaseQuantity(item.name)}>
                ➕
              </button>

              <button onClick={() => removeItem(item.name)}>
                ❌
              </button>
            </div>
            <span>₦{item.price * item.quantity}</span>
          </li>
          
        ))}
        </ul>
        )}
      </div>
      <PayButton total={total} />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}