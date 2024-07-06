"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import image1 from "../../public/product1.jpg";
import image2 from "../../public/product3.jpg";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc: image1,
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc: image2,
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function CartDrawer({
  open,
  setOpen,
}: Readonly<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between border-b pb-3">
                    <DialogTitle className="text-xs uppercase font-[450] text-black w-full">
                      Shopping bag
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-black border border-dashed border-transparent hover:border-black"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-black">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-32 flex-shrink-0 overflow-hidden">
                              <Image
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-sm font-normal text-black">
                                  <h3>
                                    <Link href={product.href}>
                                      {product.name}
                                    </Link>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-black">
                                  Qty {product.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-normal text-xs text-black underline"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 pt-6 pb-3 sm:px-6">
                  <div className="flex justify-between text-sm font-medium text-black">
                    <p>Estimated total</p>
                    <p>$262.00</p>
                  </div>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="flex items-center justify-center border border-transparent bg-black px-6 py-2.5 text-sm font-normal text-white"
                    >
                      Checkout
                    </a>
                    <p className="mt-3 text-xs">
                      By checking out, you agree to our Terms of Use and Privacy
                      Policy.
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
