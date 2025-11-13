import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-white/70">
          © {new Date().getFullYear()} The Little Tiles — All rights reserved.
        </p>
        <div className="flex justify-center mt-4 gap-6 text-white/60">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  );
}
