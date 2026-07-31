import {
  LayoutDashboard,
  FileText,
  Upload,
  BarChart3,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

// Folder Components
import CreateFolderDialog from "../folders/CreateFolderDialog";
import FolderList from "../folders/FolderList";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Documents",
      icon: FileText,
      path: "/documents",
    },
    {
      title: "Upload",
      icon: Upload,
      path: "/documents/upload",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-card text-card-foreground transition-colors duration-300">

      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-border p-6">

        <div className="rounded-xl bg-blue-600 p-3">
          <Shield className="text-white" size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold">
            IntelliVault
          </h1>

          <p className="text-sm text-muted-foreground">
            AI Secure Vault
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">

        {/* Main Menu */}
        <div className="space-y-2 p-4">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <Icon size={20} />
                <span className="font-medium">
                  {item.title}
                </span>
              </NavLink>
            );
          })}

        </div>

        {/* Folder Section */}
        <div className="border-t border-border px-4 pt-6">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Folders
            </h3>

            <CreateFolderDialog />

          </div>

          <FolderList />

        </div>

      </nav>

      {/* User */}
      <div className="border-t border-border bg-card p-5">

        <div className="mb-4">

          <p className="font-semibold text-foreground">
            {user?.fullName}
          </p>

          <p className="text-sm text-muted-foreground">
            {user?.email}
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;