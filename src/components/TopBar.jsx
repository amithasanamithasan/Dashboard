import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoPersonAdd } from "react-icons/go";
import { Tally1 } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
const TopBar = () => {
  const theme = useTheme()
  return (

    <ThemeProvider > 
    <div className=" min-h-full w-full flex items-center justify-between px-6 py-2 shadow-sm border-b bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
        <span className="text-lg font-semibold text-gray-800">
          Exam.<span className="text-purple-600 font-normal">AI</span>
        </span>
      </div>
    
      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* <Bell className="w-5 h-5 text-red-500 cursor-pointer" /> */}
        {/* <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-yellow-400 transition-all duration-300" />
        </label> */}
      <IoNotificationsOutline className="w-5 h-5 text-black  cursor-pointer" />
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
        />
        <button className="bg-[#1D0D57] hover:bg-[#1D0D57]/90 text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2">
          {/* <UserPlus className="w-4 h-4" /> */}
          <GoPersonAdd className="w-4 h-4 " />
          Invite Friends
        </button>
      </div>
    </div>
 </ThemeProvider> 
  );
};

export default TopBar;
