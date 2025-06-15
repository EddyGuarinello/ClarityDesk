import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TicketStats from "@/components/TicketStats";
import TicketTable from "@/components/TicketTable";
import RecentActivity from "@/components/RecentActivity";
import TicketChart from "@/components/TicketChart";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Header onLogout={onLogout} />

        <main className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600">
              Bem vindo de volta! Acompanhe seus tickets.
            </p>
          </div>

          {/* Stats Overview */}
          <TicketStats />

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TicketChart />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>

          {/* Tickets Table */}
          <TicketTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
