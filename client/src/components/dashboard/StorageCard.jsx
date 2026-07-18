import { HardDrive } from "lucide-react";
import { Progress } from "../ui/progress";

function StorageCard() {
  const usedStorage = 65;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-green-100 p-3">
          <HardDrive className="text-green-600" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Storage Usage
          </h2>

          <p className="text-gray-500">
            6.5 GB of 10 GB used
          </p>
        </div>
      </div>

      <Progress value={usedStorage} className="h-3" />

      <div className="mt-3 flex justify-between text-sm text-gray-500">
        <span>Used</span>
        <span>{usedStorage}%</span>
      </div>
    </div>
  );
}

export default StorageCard;