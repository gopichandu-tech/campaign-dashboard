// src/router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainCardComponents from "../components/MainCardComponents";
import CampaignDetails from "@/pages/CampaignDetails";
import PromptPlayground from "@/pages/PromptPlayground";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MainCardComponents />,
      },
      {
        path: ":department/:id",
        element: <CampaignDetails />,
      },
    ],
  },
  {
    path: "/prompt-playground",
    element: <PromptPlayground />,
  },
]);
