import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-black text-2xl tracking-wide">
          THE LITTLE TILES
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#features" className="hover:text-orange-400 transition">
            Features
          </a>
          <a href="#wiki" className="hover:text-orange-400 transition">
            Wiki
          </a>
          <a href="#roadmap" className="hover:text-orange-400 transition">
            Roadmap
          </a>
          <a
            href="#"
            className="bg-orange-500 px-4 py-2 rounded-md text-black font-semibold"
          >
            Get Now
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur p-6 flex flex-col gap-6 md:hidden">
            <a onClick={() => setOpen(false)} href="#" className="text-white">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#features" className="text-white">
              Features
            </a>
            <a onClick={() => setOpen(false)} href="#wiki" className="text-white">
              Wiki
            </a>
            <a onClick={() => setOpen(false)} href="#roadmap" className="text-white">
              Roadmap
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="bg-orange-500 px-4 py-2 rounded-md text-black font-semibold text-center"
            >
              Get Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
