"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname == "/";

  return (
    <header className={`bg-transparent ${isHomePage ? "absolute top-0 inset-x-0 z-50" : "relative"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="hidden lg:flex lg:flex-1 lg:gap-x-10">
          <Link href="/" className="text-sm font-normal leading-6 text-black">
            Home
          </Link>
          <Link href="#" className="text-sm font-normal leading-6 text-black">
            Product
          </Link>
          <Link href="#" className="text-sm font-normal leading-6 text-black">
            Store
          </Link>
        </div>
        <div className="flex lg:flex-1 justify-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-semibold text-lg">DREAMBLISS</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10">
            <Link href="/" className="text-sm font-normal leading-6 text-black">
                Search
            </Link>
            <Link href="/" className="text-sm font-normal leading-6 text-black">
                Bag (0)
            </Link>
            <Link href="/" className="text-sm font-normal leading-6 text-black">
                Login
            </Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="font-semibold tracking-wide text-lg">DREAMBLISS</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/40">
              <div className="space-y-1 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Search
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Bag (0)
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-black"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
