import api from "./api";

// Public API
export const getSharedDocument = async (token) => {
  const response = await api.get(`/documents/shared/${token}`);
  return response.data;
};

// Generate Share Link
export const shareDocument = async (documentId) => {
  const response = await api.post(`/documents/${documentId}/share`);
  return response.data;
};