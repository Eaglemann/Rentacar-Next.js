"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInputs from "@/components/Home/SearchInputs";
import { ExportCarData } from "@/services/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    _getResults();
  }, []);

  const _getResults = async () => {
    const result = await ExportCarData();
    console.log(result);
  };

  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInputs />
      <CarsFilterOptions />
    </div>
  );
}
