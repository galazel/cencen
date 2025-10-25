import React from "react";

export default function Essentials() {
   const titleStyle = { fontFamily: "Playfair Display, serif" };
  return (
    <section className="py-20 px-5 md:px-6 relative ">
      <div className="flex justify-start items-center mb-6">
        <h3
          className="!text-8xl md:text-[52px] font-normal  text-gray-900"
          style={titleStyle}
        >
          DISCOVER ESSENTIALS
        </h3>
      </div>
      <div className="grid grid-cols-[40.5%_1fr] ">
        <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" className="h-full" alt="" />
        <div className="grid grid-cols-3 gap-3">
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
           <img src="https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1" alt="" />
        </div>
      </div>
    </section>
  );
}
