import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import * as folderService from "../services/folderService";
import { useAuth } from "./AuthContext";

const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
  const { user } = useAuth();

  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedFolder, setSelectedFolder] = useState("");

  const fetchFolders = async () => {
    if (!user) return;

    try {
      setLoading(true);

      const res = await folderService.getFolders();

      console.log("Folders API Response:", res);

      setFolders(res.folders || []);
    } catch (err) {
      console.error(err);

      setFolders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFolders();
    } else {
      setFolders([]);
      setSelectedFolder("");
      setLoading(false);
    }
  }, [user]);

  return (
    <FolderContext.Provider
      value={{
        folders,
        loading,
        fetchFolders,
        setFolders,
        selectedFolder,
        setSelectedFolder,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolders = () => useContext(FolderContext);