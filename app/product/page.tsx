import Image from "next/image";
import img1 from "../../public/combo1.jpg";
import img2 from "../../public/combo2.jpg";
import img3 from "../../public/combo3.jpg";
import img4 from "../../public/combo4.jpg";

export default function Product() {
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
              <h1 className="text-4xl font-medium tracking-tighter pb-2">
                Milky Jelly Cleanser
              </h1>
              <div className="flex flex-col">
                <p className="tracking-tight">Conditioning face wash</p>
                <span className="font-medium text-2xl tracking-tighter font-mono mt-6 block">$450.00</span>
                {/* <div>TODO:Add stars here</div> */}
                <button className="mt-2 px-10 py-3 w-max border transition-all bg-white rounded-full text-sm border-primary-dark text-primary-dark tracking-tighter font-[450] hover:bg-primary hover:bg-opacity-10 flex flex-row gap-x-4">
                  <span>Add to bag</span>
                </button>
              </div>

              <div className="pt-10">
                <p className="tracking-tight font-medium text-sm">
                  Dry skin&apos;s best friend—an ultra rich, buttery
                  moisturizer.
                </p>
                <p className="pt-2 tracking-tight leading-relaxed font-[450] text-sm pr-6">
                  A luxuriously rich yet fast-absorbing face cream that delivers
                  a surge of long-lasting hydration. The buttery texture and
                  blend of botanical oils and glycerin melt into skin to give
                  you a smooth, dewy finish that&apos;s perfectly prepped for makeup.
                </p>
                <span className="block text-gray-500 text-sm font-[450] pt-3">50ml / 1.7 fl oz</span>
              </div>

              <div className="mt-10">
                <ul className="py-3 border-y border-black grid grid-cols-2 text-lg font-[450] gap-y-2">
                    <li>Nourishing</li>
                    <li>Cruelty free</li>
                    <li>Vegan</li>
                    <li>Moisturizing</li>
                    <li>Non-comedogenic</li>
                </ul>
                <p className="text-sm text-gray-500 font-[450] pt-2">Formulated without fragrance, silicone-free, recyclable glass</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
