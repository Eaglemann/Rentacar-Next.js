/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInputs from "@/components/Home/SearchInputs";
import { ExportCarData } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsLists, setCarsList] = useState<any>([]);
  const [carOriginalList, setCarOriginalList] = useState<any>([]);
  

  useEffect(() => {
    _getResults();
  }, []);

  const _getResults = async () => {
    const result: any = await ExportCarData();
    setCarsList(result?.carLists);
    setCarOriginalList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filteredList = carOriginalList.filter(
      (car: any) => car.carBrand == brand
    );
    setCarsList(filteredList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carOriginalList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInputs />
      <CarsFilterOptions
        carList={carOriginalList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsLists={carsLists} />
    </div>
  );
}
