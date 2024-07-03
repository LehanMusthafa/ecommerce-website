"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import product1Image from "../../public/product1.jpg";
import product2Image from "../../public/product2.jpg";
import product3Image from "../../public/product3.jpg";
import product4Image from "../../public/product4.jpg";
import product5Image from "../../public/product5.jpg";
import Link from "next/link";

export default () => {
  const products = [
    {
      name: "Milky Jelly Cleanser",
      description: "Conditioning face wash",
      image: product1Image,
    },
    {
      name: "After Baume",
      description: "Moisture barrier recovery cream",
      image: product2Image,
    },
    {
      name: "Solution",
      description: "Exfoliating skin perfector",
      image: product3Image,
    },
    {
      name: "Lip Line",
      description: "Enhancing pencil",
      image: product4Image,
    },
    {
      name: "Cloud Paint Blush",
      description: "Seemless cheeck color",
      image: product5Image,
    },
  ];
  return (
    <Swiper modules={[FreeMode]} spaceBetween={20} slidesPerView={3.7}>
      {products.map((product, _) => {
        return (
          <SwiperSlide>
            <Link href="/" className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
                <Image src={product.image} alt="One of the products" />
              </div>
              <div className="pt-2 bg-white flex-col -space-y-1">
                <span className="block tracking-tight font-[450] pb-0.5">
                  {product.name}
                </span>
                <span className="text-slate-500 block text-sm">
                  {product.description}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
