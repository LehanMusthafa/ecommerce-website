import Image from "next/image";
import bgImage from "../public/bg.webp";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import product1Image from "../public/product1.jpg";
import product2Image from "../public/product2.jpg";
import product3Image from "../public/product3.jpg";
import product4Image from "../public/product4.jpg";
import product5Image from "../public/product5.jpg";
import originalFormulaMainImage from "../public/original-formula-moisturizing.jpg";
import originalFormulaSubImage1 from "../public/original-formula-1.jpg";
import originalFormulaSubImage2 from "../public/original-formula-2.jpg";
import combo1 from "../public/combo1.jpg";
import combo2 from "../public/combo2.jpg";
import combo3 from "../public/combo3.jpg";
import combo4 from "../public/combo4.jpg";
import ProductScroller from "./ProductScroller";
import CtaSection from "./CtaSection";

export default function Home() {
  const recommendedProducts = [
    {
      name: "Milky Jelly Cleanser",
      image: product1Image,
    },
    {
      name: "After Baume",
      image: product2Image,
    },
    {
      name: "Solution",
      image: product3Image,
    },
    {
      name: "Lip Line",
      image: product4Image,
    },
    {
      name: "Cloud Paint Blush",
      image: product5Image,
    },
  ];
  const comboProducts = [
    {
      name: "Essential Travel Duo",
      image: combo1,
    },
    {
      name: "Lip Line + Lip Gloss",
      image: combo2,
    },
    {
      name: "The Dewy Look",
      image: combo3,
    },
    {
      name: "Boy Brow + Brow Flick Duo",
      image: combo4,
    },
  ];
  return (
    <main>
      <section className="h-screen">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black opacity-20" />
          <Image
            src={bgImage}
            alt="Background image"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      <section className="my-20 mx-8">
        <div className="flex flex-row justify-between items-center mb-16">
          <h3 className="text-4xl font-[450] tracking-tight leading-[2.8rem]">
            Recommended <br /> Products
          </h3>
          <Link
            href="/"
            className="px-6 py-2.5 text-primary-dark border bg-white rounded-full border-primary font-medium"
          >
            See More
          </Link>
        </div>

        <ProductScroller products={recommendedProducts} />
      </section>

      <section className="mt-32 mb-24 mx-8">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-4xl font-[450] tracking-tight leading-[2.8rem]">
              Our Product <br /> Dreambliss
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-lg">
              Explore an array of exceptional products tailored to fulfill your
              every requirement, offering unmatched quality and innovation to
              enhance your lifestyle.
            </p>

            <div className="pt-6">
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="border-b border-gray-300 py-6 pl-1.5 font-[550]  text-lg flex flex-row justify-between items-center"
                >
                  <span>Skincare</span>{" "}
                  <ArrowUpRightIcon className="w-5 h-5 text-gray-500" />
                </Link>
                <Link
                  href="/"
                  className="border-b border-gray-300 py-6 pl-1.5 font-[550]  text-lg flex flex-row justify-between items-center"
                >
                  <span>Makeup</span>{" "}
                  <ArrowUpRightIcon className="w-5 h-5 text-gray-500" />
                </Link>
                <Link
                  href="/"
                  className="border-b border-gray-300 py-6 pl-1.5 font-[550]  text-lg flex flex-row justify-between items-center"
                >
                  <span>Body Care</span>{" "}
                  <ArrowUpRightIcon className="w-5 h-5 text-gray-500" />
                </Link>
                <Link
                  href="/"
                  className="border-b border-gray-300 py-6 pl-1.5 font-[550]  text-lg flex flex-row justify-between items-center"
                >
                  <span>Fragrance</span>{" "}
                  <ArrowUpRightIcon className="w-5 h-5 text-gray-500" />
                </Link>
                <Link
                  href="/"
                  className="py-6 pl-1.5 font-[550] text-lg flex flex-row justify-between items-center"
                >
                  <span>Bundle Package</span>{" "}
                  <ArrowUpRightIcon className="w-5 h-5 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 mb-32 mx-8">
        <div className="flex flex-row justify-between items-center mb-16">
          <h3 className="text-4xl font-[450] tracking-tight leading-[2.8rem]">
            Bundle Package <br /> Products
          </h3>
          <Link
            href="/"
            className="px-6 py-2.5 text-primary-dark border bg-white rounded-full border-primary font-medium"
          >
            See More
          </Link>
        </div>

        <ProductScroller products={comboProducts} />
      </section>

      <section className="mt-40 mb-24 mx-8">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="flex flex-col col-span-7">
            <div className="flex flex-col items-start mb-16">
              <h3 className="text-4xl font-[450] tracking-tight leading-[2.8rem]">
                Original Formula Moisturizing
              </h3>
              <p className="text-lg pb-6 pt-2">
                Castor seed oil - A plant-based oil with fatty acids and unique
                water-binding properties to help keep lips moisturized
              </p>
              <Link
                href="/"
                className="px-6 py-2.5 text-primary-dark border bg-white rounded-full border-primary font-medium"
              >
                See More
              </Link>
            </div>

            <div className="flex flex-row gap-x-5">
              <div className="relative">
                <Image
                  src={originalFormulaSubImage1}
                  alt="Product image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src={originalFormulaMainImage}
                  alt="Product image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative col-start-8 col-span-full">
            <Image
              src={originalFormulaSubImage2}
              alt="Product image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
