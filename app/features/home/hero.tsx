"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const images = [
    "/images/heroImage.jpg",
    "/images/image1.jpg",
    "/images/image3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black mt-10"
      id="#"
    >
      {/* BACKGROUND CAROUSEL */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 bg-cover bg-center scale-105
            transition-opacity duration-1000
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[6px] text-[#C6A777] text-sm md:text-base font-semibold mb-5">
          Pilgrims Evangelical Church
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          Glorify Christ.
          <br />
          <span className="text-[#C6A777]">Edify His Church.</span>
          <br />
          Expand His Kingdom.
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
          “The church is the gathering of God’s children, growing in faith and
          maturity under God’s Word.”
        </p>

        <p className="text-[#C6A777] text-sm md:text-base italic mb-12">
          — John Calvin
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="px-8 py-4 rounded-full bg-[#C6A777] text-black font-bold text-lg hover:scale-105 transition">
            Join Worship
          </button>

          <button className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/20 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
