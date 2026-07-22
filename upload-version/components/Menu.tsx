"use client";

import { motion } from "framer-motion";

type Props= {
    addToCart: (item: { name: string; price: number }) => void;
}

export default function Menu({ addToCart }: Props) {
  const items = [
  {
    name: "Sushi Platter",
    price: "₦25,000",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ramen Bowl",
    price: "₦12,000",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tempura",
    price: "₦10,000",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
  },
];

  return (
    <section id="menu" className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (  
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >                   
              <img
                src={item.image}
                className="w-full h-60 object-cover"
                alt={item.name}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-red-600">{item.price}</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: item.name,
                      price: Number(item.price.replace(/[₦,]/g, "")),
                    })
                  }
                    
                  className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}