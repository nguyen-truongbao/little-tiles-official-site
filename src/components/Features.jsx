import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Features</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Discover the powerful systems behind The Little Tiles mod, enabling
          complex and visually stunning structures with ease.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-2">Pixel-Perfect Tiles</h3>
            <p className="text-white/60">
              Design blocks with sub-block precision for ultimate detail.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-2">Custom Models</h3>
            <p className="text-white/60">
              Create 3D tile-based models directly inside Minecraft.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
            <h3 className="text-xl font-semibold mb-2">Animation Support</h3>
            <p className="text-white/60">
              Bring your structures to life with custom movement and behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
