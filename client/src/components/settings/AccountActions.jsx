import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AccountActions() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    logout();
    navigate("/login");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        🔐 Account
      </h2>

      <p className="mb-6 text-muted-foreground">
        Logout from your IntelliVault account.
      </p>

      <button
        onClick={handleLogout}
        className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95"
      >
        Logout
      </button>
    </div>
  );
}

export default AccountActions;