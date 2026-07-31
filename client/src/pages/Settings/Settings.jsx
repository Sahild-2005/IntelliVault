import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ProfileCard from "../../components/settings/ProfileCard";
import StorageInfo from "../../components/settings/StorageInfo";
import AccountActions from "../../components/settings/AccountActions";
import AboutCard from "../../components/settings/AboutCard";

import { getDashboardStats } from "../../services/dashboardService";

function Settings() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
    } catch (error) {
      console.error("Settings Error:", error);
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Settings ⚙️
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account and application preferences.
        </p>
      </div>

      {/* Profile + Storage */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProfileCard />
        <StorageInfo stats={stats} />
      </div>

      {/* Account + About */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AccountActions />
        <AboutCard />
      </div>
    </DashboardLayout>
  );
}

export default Settings;