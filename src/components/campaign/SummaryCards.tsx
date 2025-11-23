export default function SummaryCards({ campaign }: { campaign: any }) {
  const cards = [
    { title: "Impressions", value: campaign.impressions },
    { title: "Clicks", value: campaign.clicks },
    { title: "CTR", value: `${campaign.ctr}%` },
    { title: "Conversions", value: campaign.conversions },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="p-4 bg-white shadow rounded-xl"
        >
          <h3 className="text-sm text-gray-500">{card.title}</h3>
          <p className="text-2xl font-semibold mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
