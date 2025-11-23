import { campaigns } from "@/data/campaigns";
import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState, useCallback } from "react";
import CampaignCard from "./CampaignCard";

export default function CardComponents() {
  const { status, ctr } = useFilterStore();
  const [filtered, setFiltered] = useState(campaigns);

  const applyFilters = useCallback(() => {
    let result = campaigns;

    if (status.length > 0) {
      result = result.filter((c) => status.includes(c.status));
    }

    result = result.filter((c) => c.ctr >= ctr);

    setFiltered(result);
  }, [status, ctr]);

  useEffect(() => {
    window.addEventListener("apply-filters", applyFilters);
    return () => window.removeEventListener("apply-filters", applyFilters);
  }, [applyFilters]);
  return (
    <div className="flex flex-wrap justify-evenly gap-[36px] lg:mb-[0px] mb-[85px]">
      {filtered.map((item) => (
        <CampaignCard key={item.id} item={item} />
      ))}
    </div>
  );
}
