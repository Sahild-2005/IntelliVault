import { LogOut, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import toast from "react-hot-toast";

function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between border-b bg-background px-8 py-4 shadow-sm transition-colors">

      <h1 className="text-2xl font-bold text-blue-600">
        IntelliVault
      </h1>

      <div className="flex items-center gap-4">

        <span className="font-medium text-foreground">
          {user?.fullName}
        </span>

        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 hover:bg-muted transition"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} className="text-yellow-500" />
          )}
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;