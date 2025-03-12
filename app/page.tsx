"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInputs from "@/components/Home/SearchInputs";
import { ExportCarData } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [carLists, setCarList] = useState<any>([]);

  useEffect(() => {
    _getResults();
  }, []);

  const _getResults = async () => {
    const result: any = await ExportCarData();
    console.log(result);
    setCarList(result?.carLists);
  };

  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInputs />
      <CarsFilterOptions />
    </div>
  );
}
