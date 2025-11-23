import { useParams } from "react-router-dom";
import { campaigns } from "@/data/campaigns";

import Breadcrumbs from "@/components/cards/Breadcrumbs";
import DailyPerformanceChart from "@/components/campaign/DailyPerformanceChart";
import DeviceBreakdownChart from "@/components/campaign/DeviceBreakdownChart";
import PlatformBreakdownChart from "@/components/campaign/PlatformBreakdownChart";
import SummaryCards from "@/components/campaign/SummaryCards";

export default function CampaignDetails() {

  const { id } = useParams();

  const campaign = campaigns.find((c) => c.id === Number(id));

  if (!campaign) {
    return <h2 className="p-6 text-red-500">Campaign not found.</h2>;
  }

  return (
    <div className="p-6">
      <Breadcrumbs />
      <SummaryCards campaign={campaign} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <DailyPerformanceChart data={campaign.dailyPerformance} />
        <DeviceBreakdownChart data={campaign.deviceBreakdown} />
      </div>

      <div className="mt-6">
        <PlatformBreakdownChart data={campaign.platformBreakdown} />
      </div>

    </div>
  );
}
