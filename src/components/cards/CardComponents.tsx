import { campaigns} from "@/data/campaigns"
import { Link } from "react-router-dom";
import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState } from "react";

export default function CardComponents() {
    const { status, ctr } = useFilterStore();
  const [filtered, setFiltered] = useState(campaigns);

  const applyFilters = () => {
    let result = campaigns;

    // Filter by Status
    if (status.length > 0) {
      result = result.filter((c) => status.includes(c.status));
    }

    // ⭐ Filter by CTR (THIS WAS MISSING)
    result = result.filter((c) => c.ctr >= ctr);

    setFiltered(result);
  };

  useEffect(() => {
    window.addEventListener("apply-filters", applyFilters);
    return () => window.removeEventListener("apply-filters", applyFilters);
  }, [status, ctr]);
    type CampaignStatus = "Active" | "Paused" | "Completed";

    const statusGradients: Record<CampaignStatus, string> = {
    Active: "linear-gradient(135deg, #6EE7B7 0%, #34D399 50%, #059669 100%)",
    Paused: "linear-gradient(135deg, #FCD34D 0%, #FB923C 50%, #F97316 100%)",
    Completed: "linear-gradient(135deg, #FCA5A5 0%, #F87171 50%, #DC2626 100%)",
    };


  return (
  <div className="flex flex-wrap justify-evenly gap-[36px] lg:mb-[0px] mb-[85px]">
    {
      filtered?.map((item) => (
        <div
          className="w-[450px] lg:h-[300px] h-[350px] px-[24px] pt-[24px] rounded-2xl mb-4"
          key={item?.id}
          style={{ background: statusGradients[item.status as CampaignStatus] }}
        >
          <div className="text-[32px] font-[600] text-[#FFF]">{item?.name}</div>
          <div className="text-[20px] font-[500] text-[#FFF]">{item?.description}</div>
          <div className="text-[20px] font-[400] text-[#FFF]">
            <span className="font-[600]">Status : </span>{item?.status}
          </div>
          <div className="text-[20px] text-[#FFF]">
            <span className="font-[600]">CTR: </span>{item.ctr}%
          </div>
          <Link to={`/${item?.department}/${item?.id}`}>
            <button className="my-[20px] cursor-pointer font-[600] text-[18px] bg-[#FFF] text-[#059669] px-[24px] py-[12px] rounded-[6px]">
              View Details
            </button>
          </Link>
        </div>
      ))
    }
  </div>
);

}

