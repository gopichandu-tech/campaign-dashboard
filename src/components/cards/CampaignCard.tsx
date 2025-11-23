import { Link } from "react-router-dom";

type CampaignStatus = "Active" | "Paused" | "Completed";

const statusGradients: Record<CampaignStatus, string> = {
  Active: "linear-gradient(135deg, #6EE7B7 0%, #34D399 50%, #059669 100%)",
  Paused: "linear-gradient(135deg, #FCD34D 0%, #FB923C 50%, #F97316 100%)",
  Completed: "linear-gradient(135deg, #FCA5A5 0%, #F87171 50%, #DC2626 100%)",
};

export default function CampaignCard({ item }: any) {
  return (
    <div
      className="w-[450px] lg:h-[350px] h-[400px] px-[24px] pt-[24px] rounded-2xl mb-4"
      style={{ background: statusGradients[item.status as CampaignStatus] }}
    >
      <h2 className="text-[32px] font-[600] text-[#FFF]">{item?.name}</h2>
      <p className="text-[20px] font-[500] text-[#FFF]">{item?.description}</p>
      <div className="text-[20px] font-[400] text-[#FFF]">
        <span className="font-[600]">Status : </span>{item?.status}
      </div>
      <p className="text-[20px] text-[#FFF]">
        <span className="font-[600]">CTR: </span>{item.ctr}%
      </p>
      <Link to={`/${item.department}/${item.id}`}>
        <button className="my-[20px] cursor-pointer font-[600] text-[18px] bg-[#FFF] text-[#059669] px-[24px] py-[12px] rounded-[6px]">
          View Details
        </button>
      </Link>
    </div>
  );
}
