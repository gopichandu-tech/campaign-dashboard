import { usePromptStore } from "@/store/PromptStore";
import CampaignCard from "@/components/cards/CampaignCard";

export default function PromptPlayground() {
  const { promptText, setPromptText, results, runPrompt } = usePromptStore();

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Prompt Playground</h1>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder='Example: "Show top campaigns by CTR"'
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />
        <button
          onClick={runPrompt}
          className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Run
        </button>
      </div>

      <div className="mt-4">
        {results.length === 0 && (
          <p className="text-gray-500">No results or unrecognized prompt.</p>
        )}

        <div className="flex flex-wrap justify-evenly gap-[36px] lg:mb-[0px] mb-[85px]">
          {results.map((item) => (
            <CampaignCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
