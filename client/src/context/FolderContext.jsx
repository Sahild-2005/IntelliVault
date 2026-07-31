import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as folderService from "../services/folderService";

const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW
  const [selectedFolder, setSelectedFolder] = useState("");

  const fetchFolders = async () => {
    try {
      const res = await folderService.getFolders();

      console.log("Folders API Response:", res);

      setFolders(res.folders || []);
    } catch (err) {
      console.log(err);
      setFolders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return (
    <FolderContext.Provider
      value={{
        folders,
        loading,
        fetchFolders,
        setFolders,

        // NEW
        selectedFolder,
        setSelectedFolder,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export const useFolders = () => useContext(FolderContext);