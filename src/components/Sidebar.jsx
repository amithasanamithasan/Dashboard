import React, { useState } from "react";
import {
  Home,
  BarChart2,
  FileText,
  NotebookText,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, active: true },
    { name: "Leaderboard", icon: <BarChart2 size={18} /> },
    { name: "Reports", icon: <FileText size={18} /> },
    { name: "Subscription", icon: <NotebookText size={18} /> },
  ];

  return (
    <div
      className={`flex flex-col justify-between bg-white border-r shadow-sm h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Top section */}
      <div>
        {/* Menu Items */}
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-black px-4 py-2 rounded-lg cursor-pointer  ${
                item.active && "bg-purple-200 text-black"
              }`}
            >
              {item.icon}
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 px-4 py-4">
        {!collapsed && (
          <div className="text-center text-xs text-gray-700">
            <p className=" font-bold text-black">New to Exam AI ?</p>
            <p className="text-[11px] mb-2">Learn How Exam AI Works</p>
            <button className="bg-violet-500  text-white text-xs px-4 py-1.5 rounded-full">
              View Tutorial
            </button>
          </div>
        )}

        {/* User */}
        <div
          className={`flex items-center justify-between gap-2 w-full px-2 py-2 rounded-full border cursor-pointer hover:bg-gray-100 ${
            collapsed && "justify-center"
          }`}
        >
          <img
            src="https://i.pravatar.cc/30"
            alt="User"
            className="w-7 h-7 rounded-full"
          />
          {!collapsed && (
            <>
              <span className="text-sm font-medium text-black  ">James Smith</span>
              <ChevronRight size={16} />
            </>
          )}
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-[1450px] top-[400px]  border rounded-full shadow-md p-2  transition"
        >
          {collapsed ? (
            <ChevronRight className="text-purple-500" size={16} />
          ) : (
            <ChevronLeft className="text-purple-500" size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
