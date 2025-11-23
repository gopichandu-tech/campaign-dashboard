import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { useFilterStore } from "@/store/filterStore";

export default function FilterBySlider() {
  const { ctr, setCTR } = useFilterStore();
  const [value, setValue] = useState([ctr]);

  useEffect(() => {
    setCTR(value[0]);
  }, [value]);

  
  useEffect(() => {
    setValue([ctr]);
  }, [ctr]);

  return (
    <div className="w-[95%] max-w-md ">
      <h2 className="text-[18px] md:text-[24px] font-semibold py-[10px]">
        Filter By CTR
      </h2>

      <div className="flex items-center justify-between mb-2 text-sm font-medium text-gray-700">
        <span>0%</span>
        <span>{value[0].toFixed(1)}%</span>
        <span>5%</span>
      </div>

      <Slider
        max={5}
        step={0.1}
        value={value}
        onValueChange={setValue}
        className="w-full cursor-pointer"
      />
    </div>
  );
}
