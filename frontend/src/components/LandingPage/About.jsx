import React, { useEffect, useState } from "react";
import { aboutSections } from "../../../constants";
(function loadExternalDependencies() {
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
  ];

  scripts.forEach((src) => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.head.appendChild(script);
    }
  });
})();

export default function About() {
  const [gsapReady, setGsapReady] = useState(false);

  useEffect(() => {
    const checkGsap = () => {
      if (
        typeof window.gsap !== "undefined" &&
        typeof window.ScrollTrigger !== "undefined"
      ) {
        setGsapReady(true);
      } else {
        setTimeout(checkGsap, 50);
      }
    };
    checkGsap();
  }, []);

  useEffect(() => {
    if (!gsapReady) return;
    const { gsap, ScrollTrigger } = window;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();

    tl.to(".section-design", { yPercent: -100 })
      .to(".section-dev", { yPercent: -100 })
      .to(".section-innovate", { yPercent: -100 });

    const scrollTriggerInstance = ScrollTrigger.create({
      animation: tl,
      trigger: "#scroll-container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, [gsapReady]);

  if (!gsapReady) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl">
        Loading Animation Libraries...
      </div>
    );
  }

  return (
    <div
      id="scroll-container"
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      style={{ minHeight: "100vh" }}
    >
      {aboutSections.map((item, i) => (
        <div
          key={i}
          className={`absolute w-full h-screen flex flex-col  pt-50 pl-20 text-white text-6xl font-extrabold ${item.className}`}
          style={{
            zIndex: aboutSections.length - i,
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-2xl ">
            <p className="text-4xl font-bold text-black">{item.description}</p>
          </div>
        </div>
      ))}

      <div className="relative pt-[100vh] h-[200vh] bg-gray-100 flex items-start justify-center text-gray-800 text-3xl font-serif">
        <div className="mt-20 p-8 max-w-xl text-center">
          <p className="mb-4 text-4xl font-bold text-gray-700">
            The Scroll Experience Continues...
          </p>
          <p className="text-lg">
            This content appears once the animated aboutSections are fully
            revealed and the main container unpins.
          </p>
        </div>
      </div>
    </div>
  );
}
