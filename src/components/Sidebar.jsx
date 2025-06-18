import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart2,
  FileText,
  NotebookText,
  ArrowRightToLineIcon,
  ArrowLeftToLineIcon,
} from "lucide-react";
import { ThemeProvider } from "../context/ThemeContext";

const Sidebar = ({ onPageChange }) => {
  const [collapsed, setCollapsed] = useState(false);

 
  const menuItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Leaderboard", icon: <BarChart2 size={18} />, path: "/leaderboard" },
    { name: "Reports", icon: <FileText size={18} />, path: "/reports" },
    { name: "Subscription", icon: <NotebookText size={18} />, path: "/subscription" },

  const [activeItem, setActiveItem] = useState("Home");



  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    onPageChange(itemName);
  };

  return (
    <ThemeProvider>
    <div
      className={`relative flex flex-col justify-between bg-white border-r shadow-sm h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-10 top-80 z-10 border rounded-full shadow-md p-2 bg-white transition"
      >
        {collapsed ? (
          <ArrowRightToLineIcon className="text-purple-500 w-5 h-5" />
        ) : (
          <ArrowLeftToLineIcon className="text-purple-500 w-5 h-5" />
        )}
      </button>

      {/* Top section */}
      <div>
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}

              onClick={() => handleItemClick(item.name)}
              className={`flex items-center gap-3 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors ${
                activeItem === item.name ? "bg-purple-200 text-black" : ""
              }`}

            >
              {item.icon}
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 px-4 py-4">
        {!collapsed && (
          <div className="text-center text-xs text-gray-700">
            <p className="font-bold text-black">New to Exam AI?</p>
            <p className="text-[11px] mb-2">Learn How Exam AI Works</p>
            <button className="bg-violet-500 text-white text-xs px-4 py-1.5 rounded-full">
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
              <span className="text-sm font-medium text-black">James Smith</span>
              <ArrowRightToLineIcon size={20} />
            </>
          )}
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Sidebar;
