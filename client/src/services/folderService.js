import axios from "axios";

const API = import.meta.env.VITE_API_URL + "/folders";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getFolders = async () => {
  const { data } = await axios.get(API, getAuthConfig());
  return data;
};

export const createFolder = async (folderData) => {
  const { data } = await axios.post(API, folderData, getAuthConfig());
  return data;
};

export const renameFolder = async (id, folderData) => {
  const { data } = await axios.put(
    `${API}/${id}`,
    folderData,
    getAuthConfig()
  );

  return data;
};

export const deleteFolder = async (id) => {
  const { data } = await axios.delete(
    `${API}/${id}`,
    getAuthConfig()
  );

  return data;
};