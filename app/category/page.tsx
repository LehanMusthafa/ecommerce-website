import product1Image from "../../public/product1.jpg";
import product2Image from "../../public/product2.jpg";
import product3Image from "../../public/product3.jpg";
import product4Image from "../../public/product4.jpg";
import product5Image from "../../public/product5.jpg";
import combo1 from "../../public/combo1.jpg";
import combo2 from "../../public/combo2.jpg";
import combo3 from "../../public/combo3.jpg";
import combo4 from "../../public/combo4.jpg";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "../components/CtaSection";
import BreadCrumbLinks from "../components/BreadCrumbLinks";
import FiltersDrawer from "../components/FiltersDrawer";
import FiltersButton from "../components/FiltersButton";

export default function Category() {
  const products = [
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
  const breadcrumbLinks = [
    {
      link: "/category",
      title: "All skincare",
    },
    {
      link: "/",
      title: "Cleansers",
    },
    {
      link: "/",
      title: "Balms",
    },
    {
      link: "/",
      title: "Treatments",
    },
    {
      link: "/",
      title: "Sunscreen",
    },
    {
      link: "/",
      title: "Moisturizers",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-row justify-between bg-zinc-200 py-3 px-8 mb-12 text-sm">
        <BreadCrumbLinks links={breadcrumbLinks} />
        <div className="flex flex-row gap-x-6">
            <FiltersButton />
          <button>
            <span className="text-gray-600">Sort&nbsp;</span>
            <span>(Featured)</span>
          </button>
        </div>
      </div>
      <section className="h-full mx-8">
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 w-full h-full">
          {products.map((product, i) => {
            return (
              <div className="block" key={i}>
                <Link href="/">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all" />
                    <Image src={product.image} alt="One of the products" />
                  </div>
                </Link>
                <div className="pt-2 bg-white flex-col text-sm font-normal">
                  <Link href="/" className="block pb-0.5">
                    {product.name}
                  </Link>
                  <span className="text-gray-500 font-normal">
                    Conditioning face wash
                  </span>
                  <span className="block pt-2">Rs. 2,300</span>
                  <button className="mt-4 block w-full px-6 py-2.5 text-black bg-white rounded-none shadow-[0.5px_0.5px_0px_0px_rgb(0,0,0)] hover:shadow-none border border-dashed border-transparent hover:border-black transition-all font-normal">
                    Add to bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
