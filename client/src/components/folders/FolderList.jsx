import { Files } from "lucide-react";
import { useFolders } from "../../context/FolderContext";
import FolderItem from "./FolderItem";

export default function FolderList() {
  const {
    folders = [],
    loading,
    selectedFolder,
    setSelectedFolder,
  } = useFolders();

  if (loading) {
    return (
      <div className="py-3 text-sm text-muted-foreground">
        Loading folders...
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* All Documents */}
      <button
        onClick={() => setSelectedFolder("")}
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
          selectedFolder === ""
            ? "bg-blue-600 font-medium text-white shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Files size={18} />
        <span className="truncate">All Documents</span>
      </button>

      {/* Folders */}
      {folders.length === 0 ? (
        <div className="py-3 text-sm text-muted-foreground">
          No folders yet
        </div>
      ) : (
        folders.map((folder) => (
          <FolderItem
            key={folder._id}
            folder={folder}
          />
        ))
      )}
    </div>
  );
}