import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatsCards from "../../components/dashboard/StatsCards";
import RecentDocuments from "../../components/dashboard/RecentDocuments";
import QuickActions from "../../components/dashboard/QuickActions";
import AIAssistantCard from "../../components/dashboard/AIAssistantCard";
import StorageCard from "../../components/dashboard/StorageCard";
import RecentActivity from "../../components/dashboard/RecentActivity";

import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

            <p className="text-lg font-medium text-muted-foreground">
              Loading Dashboard...
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here's an overview of your IntelliVault workspace.
        </p>
      </div>

      {/* Stats */}
      <StatsCards stats={stats} />

      {/* Recent Documents + Quick Actions */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentDocuments
            documents={stats?.recentDocuments || []}
          />
        </div>

        <QuickActions />
      </div>

      {/* AI + Storage */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AIAssistantCard stats={stats} />

        <StorageCard
          storage={stats?.storageUsed || 0}
        />
      </div>

      {/* Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;