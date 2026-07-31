import {
  Bell,
  Search,
  UserCircle2,
  Moon,
  Sun,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex h-20 items-center justify-between border-b bg-background px-8 transition-colors duration-300">

      {/* Left */}

      <div className="relative w-96">

        <Search
          className="absolute left-4 top-3.5 text-muted-foreground"
          size={18}
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full rounded-xl border bg-muted py-3 pl-11 pr-4 text-foreground outline-none transition focus:border-blue-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Dark Mode Toggle */}

        <button
          onClick={toggleTheme}
          className="rounded-xl bg-muted p-3 transition hover:opacity-80"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon size={20} />
          ) : (
            <Sun
              size={20}
              className="text-yellow-500"
            />
          )}
        </button>

        {/* Notification */}

        <button className="relative rounded-xl bg-muted p-3 transition hover:opacity-80">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-blue-600"
          />

          <div>

            <p className="font-semibold text-foreground">
              {user?.fullName}
            </p>

            <p className="text-sm text-muted-foreground">
              {user?.email}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;