"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 relative flex items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553621042-f6e147245754"
          alt="Japanese food"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Tokyo by LYA
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Premium Japanese Dining Experience in Lagos
        </motion.p>

        <motion.a
          href="https://wa.me/2349125984938"
          className="bg-red-600 px-6 py-3 rounded-lg shadow-red-500/50 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          Reserve via WhatsApp
        </motion.a>
      </motion.div>

    </section>
  );
}