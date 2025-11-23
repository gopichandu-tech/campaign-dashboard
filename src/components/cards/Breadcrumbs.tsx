import {useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-600 mb-4 flex gap-2">
      {pathParts.map((part, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="hover:underline capitalize"
          >
            {part}
          </div>

          {index < pathParts.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
}
