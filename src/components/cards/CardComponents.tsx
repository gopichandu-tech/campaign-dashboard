import { campaigns } from "@/data/campaigns";
import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";

export default function CardComponents() {
  const { status, ctr, } = useFilterStore(); // <-- add search
  const [filtered, setFiltered] = useState(campaigns);

  const applyFilters = () => {
    let result = campaigns;

    // Status Filter
    if (status.length > 0) {
      result = result.filter((c) => status.includes(c.status));
    }

    // CTR Filter
    result = result.filter((c) => c.ctr >= ctr);

    setFiltered(result);
  };

  useEffect(() => {
    applyFilters();
  }, [status, ctr]);

  return (
    <div className="flex flex-wrap justify-evenly gap-[36px] lg:mb-[0px] mb-[85px]">
      {filtered.map((item) => (
        <CampaignCard key={item.id} item={item} />
      ))}
    </div>
  );
}
