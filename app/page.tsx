import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInputs from "@/components/Home/SearchInputs";

export default function Home() {
  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInputs />
      <CarsFilterOptions />
    </div>
  );
}
