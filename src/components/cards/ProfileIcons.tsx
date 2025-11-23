import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaBellSlash } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useUIStore } from "@/store/uiStore";
export default function ProfileIcons(){
    const isNotification = useUIStore((state) => state.isNotification);
    const toggleIsNotification = useUIStore((state) => state.toggleIsNotification);
    return (
       <>
        <div className="hidden lg:flex slg:flex-row items-center gap-[36px] cursor-pointer mx-[24px]">
            <FaMessage className="w-[35px] h-[35px]"/>
            <div onClick={toggleIsNotification}>
                {isNotification ? <FaBell className="w-[35px] h-[35px]"/> :  <FaBellSlash className="w-[35px] h-[35px]"/>}
            </div>
            <FaUserCircle className="w-[35px] h-[35px]"/>
        </div>

        <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white shadow-lg py-[24px]">
          <div className="flex justify-evenly items-center">
            <FaMessage className="w-8 h-8" />

            <div onClick={toggleIsNotification}>
              {isNotification ? (
                <FaBell className="w-8 h-8" />
              ) : (
                <FaBellSlash className="w-8 h-8" />
              )}
            </div>

            <FaUserCircle className="w-8 h-8" />
          </div>
        </div>
        
       </>
   )
}