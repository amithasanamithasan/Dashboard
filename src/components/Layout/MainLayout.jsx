import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

const MainLayout = () => {
  return (
    <div>
      <TopBar />

      {/* Page content here */}
      <main>
        <Outlet />
      </main>
      <div className="relative -top-38">
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
