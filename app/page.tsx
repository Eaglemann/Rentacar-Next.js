/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInputs from "@/components/Home/SearchInputs";
import ToastMessage from "@/components/ToastMessage";
import { BookingCreatedContext } from "./context/BookingCreatedContext";
import { ExportCarData } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsLists, setCarsList] = useState<any>([]);
  const [carOriginalList, setCarOriginalList] = useState<any>([]);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

  useEffect(() => {
    _getResults();
  }, []);

  useEffect(() => {
    if (showToastMessage) {
      setTimeout(() => {
        setShowToastMessage(false);
      }, 4000);
    }
  }, [showToastMessage]);

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
      <BookingCreatedContext.Provider
        value={{ showToastMessage, setShowToastMessage }}
      >
        <Hero />
        <SearchInputs />
        <CarsFilterOptions
          carList={carOriginalList}
          orderCarList={(value: string) => orderCarList(value)}
          setBrand={(value: string) => filterCarList(value)}
        />
        <CarsList carsLists={carsLists} />
        {showToastMessage ? <ToastMessage msg={"Booking Succesfully"} /> : null}
      </BookingCreatedContext.Provider>
    </div>
  );
}
