"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbLink = {
  title: string;
  link: string;
};

export default function BreadCrumbLinks({
  links,
}: Readonly<{
  links: BreadcrumbLink[];
}>) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row gap-x-6">
        {links.map((item, i) => {
          return (
            <Link
              href={item.link}
              key={i}
              className={`${item.link == pathname ? "underline" : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
