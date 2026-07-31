import { useAuth } from "../../context/AuthContext";

function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        👤 Profile
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-muted-foreground">
            Full Name
          </p>

          <p className="mt-1 text-lg font-semibold text-foreground">
            {user?.fullName || "Not Available"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Email
          </p>

          <p className="mt-1 text-lg font-semibold text-foreground break-all">
            {user?.email || "Not Available"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Account Type
          </p>

          <span className="mt-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
            Standard User
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;