import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Quote } from "lucide-react";
import { reasons } from "../../../constants";
function WhyLoveUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % reasons.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className="h-[120vh] grid-rows-2 mb-[140vh]" >
      <div className="grid grid-cols-2 h-full">
        <div className="h-full relative">
          <img
            src="https://images.unsplash.com/photo-1722942434635-0b34e98811d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt=""
            className="h-full"
          />
          <Button className="absolute right-8 bottom-8">View Product</Button>
        </div>
        <div className="grid grid-rows-3 bg-black">
          <div>
            <p className="text-center p-5 text-white">WHY PEOPLE LOVE US</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <q className="text-center text-5xl">
              {reasons[currentIndex].description}
            </q>
          </div>
          <div className="flex justify-center  items-end pb-8">
            <ul className="flex gap-5 text-white">
              {reasons.map((item, index) => {
                return currentIndex == index ? (
                  <li
                    className="list-disc cursor-pointer"
                    onClick={(handleChangeReason) => setCurrentIndex(index)}
                    key={index}
                  >
                    {item.reason}
                  </li>
                ) : (
                  <li
                    className="list-none cursor-pointer"
                    onClick={(handleChangeReason) => setCurrentIndex(index)}
                    key={index}
                  >
                    {item.reason}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-full ">
        <div className="grid grid-rows-3 text-black">
          <div>
            <p className="text-center p-5 ">INSIGHTS & INSPIRATION</p>
          </div>
          <div className="flex justify-center items-center ">
            <p className="text-center text-8xl">
              CANCAN <br /> JOURNAL
            </p>
          </div>
          <div className="flex flex-col justify-end items-center pb-8">
            <p>asfdgoafsdjgknsalkfhdfuihsdoafkjdsoafhdsoaf</p>
            <p className="underline cursor-pointer">READ OUR JOURNAL</p>
          </div>
        </div>
        <div className="h-full">
          <img
            src="https://images.unsplash.com/photo-1722942434635-0b34e98811d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt=""
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyLoveUs;
