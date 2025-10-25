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
import { bestSellers } from "../../../constants";

export default function BestSellers() {
  const titleStyle = { fontFamily: "Playfair Display, serif" };

  return (
    <section className="py-20 px-5 md:px-6 relative ">
      <div className="flex justify-start items-center mb-6">
        <h3
          className="!text-8xl md:text-[52px] font-normal  text-gray-900"
          style={titleStyle}
        >
          SHOP BESTSELLERS
        </h3>
      </div>
      <div className="w-full">
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-4  h-[70vh]">
            {bestSellers.map((product, index) => (
              <CarouselItem
                key={index}
                className=" pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
              >
                <div className="p-1 h-full cursor-pointer">
                  <Card className="border-none rounded-none shadow-none  p-0 h-full">
                    <CardContent className="h-full p-0  ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover aspect-square relative"
                      />

                      <div className="px-4 py-4 absolute bottom-0">
                        <p className="text-sm text-gray-800 line-clamp-2">
                          {product.name}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 mt-1">
                          {product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
