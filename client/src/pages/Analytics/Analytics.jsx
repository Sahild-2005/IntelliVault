import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import AnalyticsStats from "../../components/analytics/AnalyticsStats";
import UploadChart from "../../components/analytics/UploadChart";
import DocumentTypeChart from "../../components/analytics/DocumentTypeChart";
import AIAnalytics from "../../components/analytics/AIAnalytics";

import { getDashboardStats } from "../../services/dashboardService";

function Analytics() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
    } catch (error) {
      console.error("Analytics Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

            <p className="text-lg font-medium text-muted-foreground">
              Loading Analytics...
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Analytics 📊
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track document usage, AI insights and storage statistics.
        </p>
      </div>

      {/* Statistics */}
      <AnalyticsStats stats={stats} />

      {/* Upload Activity */}
      <div className="mt-8">
        <UploadChart
          documents={stats?.recentDocuments || []}
        />
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DocumentTypeChart
          documents={stats?.recentDocuments || []}
        />

        <AIAnalytics stats={stats} />
      </div>
    </DashboardLayout>
  );
}

export default Analytics;