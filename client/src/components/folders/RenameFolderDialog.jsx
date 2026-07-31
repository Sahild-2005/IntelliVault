import { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import * as folderService from "../../services/folderService";
import { useFolders } from "../../context/FolderContext";

export default function RenameFolderDialog({
  folder,
  open,
  onOpenChange,
}) {
  const [name, setName] = useState(folder?.name || "");

  const { fetchFolders } = useFolders();

  const handleRename = async () => {
    if (!name.trim()) {
      toast.error("Folder name is required");
      return;
    }

    try {
      await folderService.renameFolder(folder._id, {
        name,
      });

      toast.success("Folder renamed");

      await fetchFolders();

      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error("Unable to rename folder");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Folder</DialogTitle>
        </DialogHeader>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRename();
            }
          }}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleRename}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}