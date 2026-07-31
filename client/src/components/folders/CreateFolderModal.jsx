import { useState } from "react";
import toast from "react-hot-toast";
import { FolderPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

import { createFolder } from "../../services/folderService";
import { useFolders } from "../../context/FolderContext";

export default function CreateFolderModal() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const { fetchFolders } = useFolders();

  const handleCreate = async () => {
    if (!name.trim()) {
      toast.error("Folder name is required");
      return;
    }

    try {
      await createFolder({ name });

      toast.success("Folder created");

      fetchFolders();

      setName("");

      setOpen(false);
    } catch (err) {
      toast.error("Failed to create folder");
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <FolderPlus className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Folder</DialogTitle>
        </DialogHeader>

        <input
          className="mt-4 w-full rounded-lg border p-3"
          placeholder="Folder name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          className="mt-5 w-full"
          onClick={handleCreate}
        >
          Create Folder
        </Button>
      </DialogContent>
    </Dialog>
  );
}