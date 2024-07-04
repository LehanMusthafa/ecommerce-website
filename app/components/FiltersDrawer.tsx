'use client'

import { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function FiltersDrawer({
    open,
    setOpen,
  }: Readonly<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }>) {

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
      onClick={() => setOpen(false)}
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div className="flex items-center justify-between border-b pb-3 px-4 sm:px-6">
                    <DialogTitle className="text-xs uppercase font-[450] text-black w-full">Filters</DialogTitle>
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
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div>
                        <span className='text-sm font-normal'>Skin Type</span>
                        <ul className='flex flex-row flex-wrap gap-3 text-sm pt-2'>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Combination</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Dry</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Normal</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Oily</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Sensitive</button>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <span className='text-sm font-normal'>Skin Concern</span>
                        <ul className='flex flex-row flex-wrap gap-3 text-sm pt-2'>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Acne + Blemishes</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Dryness</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Dullness</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Fine lines</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Irritation + redness</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Pores</button>
                            <button className='px-3 py-2 bg-zinc-200 italic'>Uneven skin tone + texture</button>
                        </ul>
                    </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
