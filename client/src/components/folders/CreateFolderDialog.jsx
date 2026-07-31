import { useState } from "react";
import toast from "react-hot-toast";
import { FolderPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useFolders } from "../../context/FolderContext";
import * as folderService from "../../services/folderService";

export default function CreateFolderDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const { fetchFolders } = useFolders();

  const handleCreate = async () => {
    if (!name.trim()) {
      toast.error("Folder name is required");
      return;
    }

    try {
      await folderService.createFolder({
        name,
      });

      toast.success("Folder created");

      await fetchFolders();

      setName("");
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Unable to create folder");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
        >
          <FolderPlus className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Folder</DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Folder name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreate();
            }
          }}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleCreate}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}