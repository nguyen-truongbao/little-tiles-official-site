import React from "react";

export default function Wiki() {
  return (
    <section id="wiki" className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Wiki</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Dive into the full documentation and learn how to create advanced structures
          using The Little Tiles mod. From tile creation to animation scripting — 
          everything is covered.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-400 transition inline-block"
          >
            Open Wiki
          </a>
        </div>
      </div>
    </section>
  );
}
