"use client";

import { ViewSelector } from "@/components/molecules/ViewSelector";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-28 bg-emerald-600 px-10 py-6">
      <div className="flex flex-col gap-2">
        <span className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
          San Kain
        </span>
        <span className="text-white text-sm sm:text-base font-medium tracking-wide">
          San Tayo Kakain
        </span>
      </div>
      <ViewSelector />
    </nav>
  );
};
