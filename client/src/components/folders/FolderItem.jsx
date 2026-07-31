import { Folder } from "lucide-react";
import { useFolders } from "../../context/FolderContext";
import FolderActions from "./FolderActions";

export default function FolderItem({ folder }) {
  const {
    selectedFolder,
    setSelectedFolder,
  } = useFolders();

  const isActive = selectedFolder === folder._id;

  return (
    <div
      onClick={() => setSelectedFolder(folder._id)}
      className={`group flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-3">
        <Folder
          size={18}
          className={`flex-shrink-0 ${
            isActive
              ? "text-white"
              : "text-blue-500"
          }`}
        />

        <span
          className={`truncate text-sm font-medium ${
            isActive
              ? "text-white"
              : "text-foreground"
          }`}
        >
          {folder.name}
        </span>
      </div>

      {/* Prevent click when opening menu */}
      <div onClick={(e) => e.stopPropagation()}>
        <FolderActions folder={folder} />
      </div>
    </div>
  );
}