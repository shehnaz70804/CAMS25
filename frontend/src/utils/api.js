import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchRequests = async () => API.get("/requests/pending");
export const submitRequest = async (data, token) =>
  API.post("/requests", data, { headers: { Authorization: `Bearer ${token}` } });
export const approveRequest = async (id, token) =>
  API.put(`/requests/${id}`, { status: "Approved" }, { headers: { Authorization: `Bearer ${token}` } });
