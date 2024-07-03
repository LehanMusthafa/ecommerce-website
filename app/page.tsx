import Image from "next/image";
import bgImage from "../public/bg.webp";
import Link from "next/link";
import RecommendedProducts from "./components/RecommendedProducts";

export default function Home() {
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
          <h3 className="text-4xl font-[450] tracking-tighter leading-[2.8rem]">
            Recommended <br /> Products
          </h3>
          <Link
            href="/"
            className="px-6 py-2.5 text-primary border bg-white rounded-full border-primary tracking-tight font-medium"
          >
            See More
          </Link>
        </div>

        <RecommendedProducts />
      </section>
    </main>
  );
}
