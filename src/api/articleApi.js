import axiosInstance from "./axiosInstance";

export const fetchAllArticles = () => axiosInstance.get("/article/list");
export const fetchArticleById = (id) => axiosInstance.get(`/article/${id}`);
export const createArticle = (dto) => axiosInstance.post("/article/save", dto);
export const updateArticle = (id, dto) => axiosInstance.put(`/article/update/${id}`, dto);
export const deleteArticle = (id) => axiosInstance.delete(`/article/delete/${id}`);