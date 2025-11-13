import React from "react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-3">Stay Updated</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Subscribe to get the latest news, updates and development logs
          delivered directly to your inbox.
        </p>

        <form className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email..."
            className="px-4 py-3 rounded-md w-full md:w-auto bg-white/10 placeholder-white/50 text-white outline-none border border-white/20"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-400 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
