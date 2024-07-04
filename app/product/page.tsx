import Image from "next/image";
import img1 from "../../public/combo1.jpg";
import img2 from "../../public/combo2.jpg";
import img3 from "../../public/combo3.jpg";
import img4 from "../../public/combo4.jpg";
import detailImg from "../../public/detail-image.jpg";
import { StarIcon as StarIconFilled } from "@heroicons/react/16/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import ProductScroller from "../components/ProductScroller";

export default function Product() {
  const suggestedProducts = [
    {
      name: "Milky Jelly Cleanser",
      image: img1,
    },
    {
      name: "After Baume",
      image: img2,
    },
    {
      name: "Solution",
      image: img3,
    },
    {
      name: "Lip Line",
      image: img4,
    },
  ];
  return (
    <>
      <section className="mt-14 mb-24 mx-8 min-h-screen">
        <div className="flex flex-row">
          <div className="w-full flex flex-row gap-x-3 h-[760px]">
            <div className="grid grid-rows-4 gap-y-3 relative">
              <Image
                src={img1}
                alt="Product image"
                className="h-full w-full object-cover"
              />
              <Image
                src={img2}
                alt="Product image"
                className="h-full w-full object-cover"
              />
              <Image
                src={img3}
                alt="Product image"
                className="h-full w-full object-cover"
              />
              <Image
                src={img4}
                alt="Product image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[760px]">
              <Image
                src={img4}
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="pl-12">
              <div className="flex flex-col">
                <h1 className="text-4xl font-medium pb-2">
                  Milky Jelly Cleanser
                </h1>
                <p>Conditioning face wash</p>
                <div className="flex flex-row items-center gap-x-0.5 mt-2">
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconOutline className="w-4 h-4" />
                  <span className="pl-2 text-sm font-[450]">(1530)</span>
                </div>
                <div className="mt-8">
                  <span className="font-medium text-2xl block">
                    $450.00
                  </span>
                  <button className="mt-4 px-20 py-3 w-max text-center justify-center border transition-all hover:bg-opacity-15 rounded-full text-sm border-primary-dark text-primary-dark font-[450] bg-primary bg-opacity-10 flex flex-row gap-x-4">
                    <span>Add to bag</span>
                  </button>
                </div>
              </div>

              <div className="mt-16">
                <p className="font-medium text-sm">
                  Dry skin&apos;s best friend—an ultra rich, buttery
                  moisturizer.
                </p>
                <p className="pt-2 leading-relaxed font-[450] text-sm pr-6">
                  A luxuriously rich yet fast-absorbing face cream that delivers
                  a surge of long-lasting hydration. The buttery texture and
                  blend of botanical oils and glycerin melt into skin to give
                  you a smooth, dewy finish that&apos;s perfectly prepped for
                  makeup.
                </p>
                <span className="block text-gray-500 text-sm font-[450] pt-3">
                  50ml / 1.7 fl oz
                </span>
              </div>

              <div className="mt-10">
                <ul className="py-3 border-y border-black grid grid-cols-2 text-lg font-[450] gap-y-2">
                  <li>Nourishing</li>
                  <li>Cruelty free</li>
                  <li>Vegan</li>
                  <li>Moisturizing</li>
                  <li>Non-comedogenic</li>
                </ul>
                <p className="text-sm text-gray-500 font-[450] pt-2">
                  Formulated without fragrance, silicone-free, recyclable glass
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mx-8">
        <div className="grid grid-cols-12 items-end w-full">
          <div className="relative col-start-2 col-span-3 h-64 mb-8">
            <Image
              src={detailImg}
              alt="Product image"
              className="w-auto h-full"
            />
          </div>
          <div className="flex flex-col col-start-5 col-span-6">
            <h3 className="text-xs uppercase">Ingredients</h3>
            <h4 className="text-3xl leading-[2.5rem] mt-16">
              Rich in ceramides and fatty acids that reinforce skin’s natural
              moisture barrier, lock-in moisture long-term, and improve radiance
              over time.
            </h4>
            <div className="mt-16">
              <ul className="grid grid-cols-2 gap-x-4 text-sm">
                <li className="pt-2 border-t border-black pb-6">Glycerin</li>
                <li className="pt-2 border-t border-black pb-6">
                  Customized Power Primers
                </li>
                <li className="pt-2 border-t border-black pb-6">
                  Ceramides 3 & 6
                </li>
                <li className="pt-2 border-t border-black pb-6">
                  Essential Key Fatty Acids
                </li>
                <li className="pt-2 border-t border-black pb-6">
                  Buddleja Officinalis Flower Extract
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-8 mt-32 mb-32">
        <div>
          <h2 className="text-4xl font-[450] leading-[2.8rem] pb-7">
            Reviews
          </h2>
          <div className="flex flex-row gap-x-20">
            <div className="flex flex-col justify-start gap-y-1">
              <h4 className="text-3xl font-[450]">
                1530
              </h4>
              <span className="block text-gray-500 text-sm">Total reviews</span>
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <div className="flex flex-row items-center gap-x-2">
                <h4 className="text-3xl font-[450]">
                  4.3
                </h4>
                <div className="flex flex-row gap-x-0.5">
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconOutline className="w-4 h-4" />
                </div>
              </div>
              <span className="block text-gray-500 text-sm">
                Average rating
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <ul>
            <li className="grid grid-cols-12 border-t border-gray-200 pt-6">
              <div className="col-span-5 text-sm font-[450]">
                <p className="pb-3">Katrina B. (Denver, CO)</p>
                <p>
                  <span className="text-gray-500 pr-1.5">Skin Type</span>
                  <span>Dry</span>
                </p>
                <p>
                  <span className="text-gray-500 pr-1.5">Skin Shade</span>
                  <span>Light</span>
                </p>
              </div>
              <div className="col-start-6 col-span-5 text-sm">
                <div className="flex flex-row gap-x-0.5">
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconFilled className="w-4 h-4" />
                  <StarIconOutline className="w-4 h-4" />
                </div>
                <p className="font-medium pt-3">Love this!</p>
                <p className="pt-2 font-[450]">
                  I love this moisturizer. Not too thick, but lasts a long time.
                  I do miss the smell of the original. Feel free to bring that
                  back please!
                </p>
                <p className="pt-5">
                  <span className="font-medium pr-2">Bottom line</span>
                  <span>Yes - I would recommend this to a friend</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-40 mb-32 mx-8">
        <div className="flex flex-row justify-between items-center mb-16">
          <h3 className="text-4xl font-[450] tracking-tight leading-[2.8rem]">
            Suggested <br /> Products
          </h3>
        </div>

        <ProductScroller products={suggestedProducts} />
      </section>
    </>
  );
}
