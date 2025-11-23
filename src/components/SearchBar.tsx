import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logo.webp'
import { useUIStore } from "../store/uiStore";
import ProfileIcons from "./cards/ProfileIcons";
import { usePromptStore } from "@/store/PromptStore";

export default function SearchBar(){
    const openSearch = useUIStore((state) => state.openSearch);
    const toggleOpenSearch = useUIStore((state) => state.toggleOpenSearch); 
     
     const sidebarOpen = useUIStore((state) => state.sidebarOpen)
     const toggleSidebar = useUIStore((state) => state.toggleSidebar);

     const { promptText, setPromptText, runPrompt } = usePromptStore();

    return (
        <div className="flex justify-between h-[85px] w-full">
           <div className="flex items-center lg:gap-[36px] gap-[24px] mx-[16px] lg:mx-[24px] w-full">
              <a href="/">
                <img
                src={logo}
                alt="logo"
                className={`lg:w-auto h-[55px] 
                  ${openSearch ? "hidden lg:block" : "block"} 
                `}
                />
              </a>
              <div
                className={`order-3 lg:order-1 
                  ${openSearch ? "hidden lg:block" : "block"}
                `}
              >
                <RxHamburgerMenu
                  onClick={toggleSidebar}
                  className={`${sidebarOpen ? "text-gray-600" : "text-black-800"} w-[35px] h-[35px] cursor-pointer`}
                />
              </div>
              <div className="flex items-center gap-3 flex-1 order-2 lg:order-2 lg:flex-none">

                <IoIosSearch
                  size={35}
                  className={`cursor-pointer ${openSearch ? 'text-black-800' : 'text-gray-600'}`}
                  onClick={toggleOpenSearch}
                />

                <div className={`flex gap-[12px] ${openSearch ? "w-full opacity-100" : "w-0 opacity-0 p-0 border-none"}`}>
                  <input
                  type="text"
                  placeholder='Example: "Show top campaigns by CTR"'
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className={`
                    transition-all duration-300 border border-gray-300 rounded-lg lg:min-w-[300px]
                    py-1 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400
                   
                  `}
                  style={{ overflow: "hidden" }}
                />

                <button
                  onClick={runPrompt}
                  className="bg-black text-white px-4 py-[5px] rounded-sm"
                >
                  Run
                </button>
                </div>

              </div>
           </div>
            <ProfileIcons />
        </div>
    )

};