import React from "react";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-24 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          See what features are in development and what future tools will be added
          to elevate your building experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Q1 — Core Engine</h3>
            <p className="text-white/60">Tile rendering improvements & new model editor.</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Q2 — Animation Suite</h3>
            <p className="text-white/60">Official support for tile animations & scripting.</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Q3 — Multiplayer Tools</h3>
            <p className="text-white/60">Optimized syncing and collaborative building features.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
