import { UserRound } from "lucide-react";
import Logo from "../../assets/Icons/logo+hamburger.png";
import Ball from "../../assets/ball.png";

export const Header = () => {
  return (
    <div className="flex flex-col h-[62px] bg-gradient-to-r from-customblue3 via-customblue2 to-customblue1">
      <div className="flex flex-row justify-between">
        <div className="flex items-center p-5 pt-3 gap-10 cursor-pointer">
          <img src={Logo} alt="Logo" />
          <img src={Ball} alt="Ball" width={100} height={100} className="hidden md:block" />
        </div>
        <div className="flex items-center p-5 pt-3">
          <div className="w-9 h-9 bg-[#02020F26] rounded-full flex items-center justify-center">
            <UserRound className="text-white cursor-pointer" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
