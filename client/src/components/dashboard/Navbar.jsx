import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left */}

      <div className="relative w-96">

        <Search
          className="absolute left-4 top-3.5 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative rounded-xl bg-slate-100 p-3 hover:bg-slate-200">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-blue-600"
          />

          <div>

            <p className="font-semibold">
              {user?.fullName}
            </p>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;