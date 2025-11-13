import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Wiki from "./components/Wiki.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="w-full bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Wiki />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}
