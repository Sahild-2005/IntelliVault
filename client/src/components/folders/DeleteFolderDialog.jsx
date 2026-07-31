import toast from "react-hot-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

import * as folderService from "../../services/folderService";
import { useFolders } from "../../context/FolderContext";

export default function DeleteFolderDialog({
  folder,
  open,
  onOpenChange,
}) {
  const { fetchFolders } = useFolders();

const handleDelete = async () => {
  console.log("DELETE CLICKED");
  console.log("Folder:", folder);

  try {
    const res = await folderService.deleteFolder(folder._id);

    console.log("Response:", res);

    toast.success("Folder deleted");

    await fetchFolders();

    onOpenChange(false);
  } catch (err) {
    console.error("DELETE ERROR:", err);
    console.log(err.response);

    toast.error("Unable to delete folder");
  }
};  

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Folder?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This will permanently delete
            <strong> "{folder?.name}" </strong>
            and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}