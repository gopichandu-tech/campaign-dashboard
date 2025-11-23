import { MdDashboard } from "react-icons/md";
import FilterByStatus from "./filterByComponents/FilterByStatus";
import FilterBySlider from "./filterByComponents/FilterBySlider";
import { useFilterStore } from "@/store/filterStore";

export default function DashboardSidebar(){
    const { clearFilters } = useFilterStore();
    return (
        <>
          <div className="flex flex-col ml-[24px] mt-[20px]">
            <div>
               <h2 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[30px] font-semibold capitalize">
                  Main
               </h2>
               <hr className="border-gray-300 mr-[20px] mt-[10px]" />
               <div className="flex gap-[6px] py-[10px]">
                 <MdDashboard className="my-auto text-[20px]" />
                 <a href="/"><div className="text-[20px]">Dashboard</div> </a>
               </div>
               <hr className="border-gray-300 mr-[20px] mt-[5px]" />

               <div>
                  <h2 className="py-[10px] text-[20px] leading-[22px] md:text-[24px] md:leading-[30px] font-semibold capitalize">
                    All FIlters
                  </h2>
                  <hr className="border-gray-300 mr-[20px] mt-[5px]" />
                  <FilterByStatus  />
                  <hr className="border-gray-300 mr-[20px] mt-[5px]" />
                  <FilterBySlider />
                  <hr className="border-gray-300 mr-[20px] mt-[30px]" />
               </div>

               <button 
                  className="bg-[#000] text-[#FFF] px-[24px] py-[12px] my-[20px] cursor-pointer"
                  onClick={() => {
                  window.dispatchEvent(new Event("apply-filters"))}}
               >
                  Apply Filters
               </button>
                <button
                  onClick={clearFilters}
                  className="bg-[#000] text-[#FFF] px-[24px] py-[12px] my-[20px] cursor-pointer mx-[12px]"
                  >
                  Clear
                  </button>
            </div>
          </div>
        </>
    )

};