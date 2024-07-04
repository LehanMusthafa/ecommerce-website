"use client"
import { useState } from "react";
import FiltersDrawer from "./FiltersDrawer";

export default function FiltersButton() {
  const [openFilters, setOpenFilters] = useState(false)

    return (
        <>
        <button>
            <span className="text-gray-600">FIlters&nbsp;</span>
            <span>(0)</span>
            <FiltersDrawer open={openFilters} setOpen={setOpenFilters} />
          </button>
        </>
    )
}