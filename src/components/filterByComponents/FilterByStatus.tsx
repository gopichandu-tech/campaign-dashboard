import { filtersData } from "@/data/filtersData";
import { useFilterStore } from "@/store/filterStore";

export default function FilterByStatus() {
  const filterByStatus = filtersData.find((item) => item.key === "status");
  const { status, toggleStatus } = useFilterStore();

  return (
    <div>
      {/* Title */}
      <h2 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[30px] font-semibold capitalize py-[10px]">
        Status
      </h2>

      {/* Options */}
      <div className="flex lg:flex-col flex-row flex-wrap gap-[20px] py-[5px]">
        {filterByStatus?.options?.map((item, index) => (
        <label
          key={index}
          className="flex items-center gap-2 text-[14px] leading-[18px] md:text-[16px] md:leading-[22px]"
        >
          <input 
            type="checkbox" className="scale-125"
            checked={status.includes(item.label)}
            onChange={() => toggleStatus(item.label)}
          />
          <span className="text-[20px]">{item?.label}</span>
        </label>
      ))}
      </div>
      
    </div>
  );
}
