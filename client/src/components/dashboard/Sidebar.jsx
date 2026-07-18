import {
  LayoutDashboard,
  FileText,
  Upload,
  Bot,
  BarChart3,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

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
    title: "AI Assistant",
    icon: Bot,
    path: "/ai",
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
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b p-6">

        <div className="rounded-xl bg-blue-600 p-3">
          <Shield className="text-white" size={24} />
        </div>

        <div>

          <h1 className="text-xl font-bold">
            IntelliVault
          </h1>

          <p className="text-sm text-gray-500">
            AI Secure Vault
          </p>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}

      </nav>

      {/* User */}

      <div className="border-t p-5">

        <div className="mb-4">

          <p className="font-semibold">
            {user?.fullName}
          </p>

          <p className="text-sm text-gray-500">
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