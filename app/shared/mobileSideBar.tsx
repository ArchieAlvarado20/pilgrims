"use client";
import { useState } from "react";

export default function TopbarMobile() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Sermons", href: "#sermons" },
    { name: "Devotions", href: "#devotion" },
    { name: "About", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Leaders", href: "#leaders" },
    { name: "Statement of Faith", href: "#faith" },

    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-full mx-auto px-5 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-white/20 shadow-lg">
              <img
                src="/images/logo.jpg"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white leading-none parisienne-regular">
                Pilgrims Evangelical
              </h1>
              <p className="text-xs tracking-[3px] text-gray-300 uppercase mt-1">
                Church Ministry
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative group hover:text-[#C6A777] transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C6A777] group-hover:w-full transition-all"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#email">
            <button className="hidden lg:block px-6 py-3 rounded-full bg-[#C6A777] text-black font-bold hover:scale-105 transition">
              Get Connected
            </button>
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed inset-0 z-50 transition
          ${open ? "visible" : "invisible"}
        `}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
        <div
          className={`
            absolute right-0 top-0 h-full w-80 bg-black
            border-l border-white/10 p-6
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl mb-10"
          >
            ✕
          </button>

          {/* LINKS */}
          <div className="flex flex-col gap-6 text-white text-lg">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#C6A777] transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-10 w-full py-3 rounded-full bg-[#C6A777] text-black font-bold">
            Get Connected
          </button>
        </div>
      </div>
    </>
  );
}
