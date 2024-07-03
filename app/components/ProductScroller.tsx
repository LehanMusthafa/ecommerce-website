"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Product = {
    name: string;
    image: StaticImageData;
}

export default function ProductScroller({
    products,
  }: Readonly<{
    products: Product[];
  }>) {
  return (
    <Swiper modules={[FreeMode]} spaceBetween={20} slidesPerView={3.7}>
      {products.map((product, i) => {
        return (
          <SwiperSlide key={i}>
            <Link href="/" className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
                <Image src={product.image} alt="One of the products" />
              </div>
              <div className="pt-2 bg-white flex-col -space-y-1">
                <span className="block text-sm tracking-tight font-[450] pb-0.5">
                  {product.name}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
