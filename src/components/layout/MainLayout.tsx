import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import PageNavigation from "./PageNavigation";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 lg:p-8 gap-6">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 max-h-screen lg:pl-4">
          <div className="bg-card border border-border rounded-3xl p-6 lg:p-8 terminal-glow animate-fade-in">
            <PageNavigation />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
