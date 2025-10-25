import React from "react";
import Carousel from "../LandingPage/carousel";
import Header from "../common/Header";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel />
      <div className="absolute inset-0 z-0 bg-black opacity-45"></div>
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-4 mb-70 mt-20">
        <p className="!text-[2.5rem] font-extrabold sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          A NEW GENERATION OF <br /> MODERN FURNISHINGS
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          Bringing you the future of contemporary home design — effortlessly
          stylish and endlessly inviting.
        </p>
        <button className="bg-white text-black p-2 rounded font-semibold hover:bg-gray-200 transition">
          SHOP NOW
        </button>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-10 mt-50">
        <p
          className="text-[28rem] text-white font-extrabold opacity-95 text-center leading-none font-logo"
          style={{ lineHeight: "0.8" }}
        >
          CANCAN
        </p>
      </div>
    </section>
  );
}
