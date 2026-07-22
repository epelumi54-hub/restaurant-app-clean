"use client";

import { useEffect, useState } from "react";

export default function Experience() {

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setHours(19, 0, 0); // 7PM today

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("LIVE NOW 🔴");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-black text-white relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-red-600 opacity-10 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Tokyo Experience 🎧
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          As the night sets in, Tokyo by LYA transforms into a vibrant dining experience.
        </p>

        {/* DJ Card */}
        <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-8 shadow-xl">

          <h3 className="text-2xl font-semibold mb-4 text-red-400 flex items-center justify-center gap-2">

            🎵 Live DJ Nights
            <span className="animate-bounce">🎧</span>

          </h3>

          <p className="text-lg mb-4">
            Starts from <span className="font-bold text-white">7PM</span>
          </p>

          {/* Countdown */}
          <p className="text-red-400 font-semibold mb-6">
            Next DJ starts in: {timeLeft}
          </p>

          <p className="text-gray-400 mb-6">
            Great music. Great food. Unforgettable nights.
          </p>

          {/* Booking Button */}
          <a
            href="#contact"
            className="bg-red-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-red-500/50 transition"
          >
            Reserve a Table
          </a>

        </div>

      </div>
    </section>
  );
}