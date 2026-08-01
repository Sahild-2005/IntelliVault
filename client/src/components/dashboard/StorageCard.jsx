import { HardDrive, CheckCircle2 } from "lucide-react";
import { Progress } from "../ui/progress";

function StorageCard({ storage = 0 }) {
  const STORAGE_LIMIT = 1024 * 1024 * 1024; // 1 GB

  const storagePercentage = Math.min(
    (storage / STORAGE_LIMIT) * 100,
    100
  );

  const formatStorage = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;

    if (bytes < 1024 * 1024 * 1024)
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-green-100 p-3 dark:bg-green-900/30">
          <HardDrive
            className="text-green-600 dark:text-green-400"
            size={24}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">
            Storage Usage
          </h2>

          <p className="text-sm text-muted-foreground">
            {formatStorage(storage)} of 1 GB used
          </p>
        </div>

      </div>

      {/* Progress */}
      <Progress
        value={storagePercentage}
        className="h-3"
      />

      <div className="mt-3 flex justify-between text-sm text-muted-foreground">
        <span>Used Space</span>

        <span>
          {storagePercentage.toFixed(2)}%
        </span>
      </div>

      {/* Bottom Info */}
      <div className="mt-6 rounded-xl bg-muted p-4 transition-colors duration-300">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-muted-foreground">
            Available Storage
          </span>

          <span className="font-semibold text-foreground">
            {formatStorage(STORAGE_LIMIT - storage)}
          </span>

        </div>

        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">

          <CheckCircle2 size={18} />

          <span className="text-sm font-medium">
            Cloud Storage Active
          </span>

        </div>

      </div>

    </div>
  );
}

export default StorageCard;