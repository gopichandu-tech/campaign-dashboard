
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import DashboardSidebar from "../components/DashboardSidebar";
import { useUIStore } from "../store/uiStore";

export default function DashboardLayout() {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);

  return (
    <div className="h-screen flex flex-col overflow-hidden">

      <div className="h-[85px] shadow fixed top-0 left-0 right-0 bg-white z-50">
        <NavBar />
      </div>

      <div className="flex lg:pt-[85px] h-full overflow-hidden">

        {sidebarOpen && (
          <div className="block lg:hidden w-full h-full fixed left-0 top-[85px] bottom-0 bg-white z-50">
            <DashboardSidebar />
          </div>
        )}

        {sidebarOpen && (
          <div className="hidden lg:block lg:w-[20%] h-full fixed left-0 top-[85px] bottom-0 border-r bg-white z-40">
            <DashboardSidebar />
          </div>
        )}

        <div
          className={`
            flex-1 overflow-y-auto p-5 
            ${sidebarOpen ? "lg:ml-[20%]" : ""}
            mt-[85px] lg:mt-0
          `}
          style={{ height: "calc(100vh - 85px)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
