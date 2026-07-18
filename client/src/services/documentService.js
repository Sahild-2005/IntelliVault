import api from "./api";

/**
 * Upload Document
 */
export const uploadDocument = async (file) => {
  const formData = new FormData();

  formData.append("document", file);

  const response = await api.post(
    "/documents/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

/**
 * Get All Documents
 */
export const getDocuments = async () => {
  const response = await api.get("/documents");
  return response.data;
};

/**
 * Delete Document
 */
export const deleteDocument = async (id) => {
  const response = await api.delete(
    `/documents/${id}`
  );

  return response.data;
};

/**
 * Rename Document
 */
export const renameDocument = async (id, name) => {
  const response = await api.put(
    `/documents/${id}`,
    { name }
  );

  return response.data;
};