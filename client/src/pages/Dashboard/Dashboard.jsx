import DashboardLayout from "../../layouts/DashboardLayout";

import StatsCards from "../../components/dashboard/StatsCards";
import RecentDocuments from "../../components/dashboard/RecentDocuments";
import QuickActions from "../../components/dashboard/QuickActions";
import AIAssistantCard from "../../components/dashboard/AIAssistantCard";
import StorageCard from "../../components/dashboard/StorageCard";
import RecentActivity from "../../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's an overview of your IntelliVault workspace.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Recent Documents + Quick Actions */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentDocuments />
        </div>

        <QuickActions />
      </div>

      {/* AI Assistant + Storage */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AIAssistantCard />
        <StorageCard />
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;