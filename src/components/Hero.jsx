import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://files.catbox.moe/jyfan8.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
          THE LITTLE TILES
        </h1>
        <p className="mt-4 text-white/80 text-lg md:text-xl">
          A modular multiblock building mod allowing intricate custom structures.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#features"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-400 transition"
          >
            Explore Features
          </a>
          <a
            href="#wiki"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
          >
            Visit Wiki
          </a>
        </div>
      </div>
    </section>
  );
}
