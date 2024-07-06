import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="mt-40 mb-24 px-8 relative pt-24">
      <div className="bg-gradient-to-b from-primary opacity-50 absolute inset-0 -z-10" />
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2 pb-3">
          <h3 className="text-5xl font-medium tracking-tight leading-[3.8rem] text-primary-dark text-center">
            Experince the Difference for Yourself - Try and Buy Our Products
            Today!
          </h3>
        </div>
        <Link
          href="/"
          className="px-6 py-2.5 text-white bg-primary hover:bg-primary-dark transition-all rounded-full border-primary font-medium"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
