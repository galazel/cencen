import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { collections } from "../../../constants";
export default function Collection() {
 

  return (
    <section className="collections grid grid-cols-3 gap-5 my-35 mx-10  h-[90vh]">
      {collections.map((item, index) => {
        return (
          <div key={index} className="relative h-full cursor-pointer text-white">
            <img src={item.image} className="h-full" />
            <div className="flex justify-center items-center absolute inset-0 ">
              <p className="text-center uppercase text-4xl font-bold">{item.name}</p>
            </div>

            <div className="flex justify-center items-center absolute flex-col gap-1 inset-x-0 bottom-10 ">
              <p>{item.definition}</p>
              <p className="underline">SHOP COLLECTION</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
