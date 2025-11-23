import { usePromptStore } from "@/store/PromptStore";

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
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Run
        </button>
      </div>

      <div className="mt-4">
        {results.length === 0 && (
          <p className="text-gray-500">No results or unrecognized prompt.</p>
        )}

        {results.map((item) => (
          <div
            key={item.id}
            className="p-4 mb-3 border rounded-xl shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p>Status: {item.status}</p>
            <p>CTR: {item.ctr}%</p>
            <p>Conversions: {item.conversions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
