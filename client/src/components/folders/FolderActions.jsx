import { useState } from "react";

import {
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import RenameFolderDialog from "./RenameFolderDialog";
import DeleteFolderDialog from "./DeleteFolderDialog";

export default function FolderActions({ folder }) {
  const [renameOpen, setRenameOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-md p-1 opacity-0 transition hover:bg-gray-200 group-hover:opacity-100">
            <MoreVertical size={16} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem
            onClick={() => setRenameOpen(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Rename
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setDeleteOpen(true)}
            className="text-red-600 focus:text-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <RenameFolderDialog
        folder={folder}
        open={renameOpen}
        onOpenChange={setRenameOpen}
      />

      <DeleteFolderDialog
        folder={folder}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      />
    </>
  );
}