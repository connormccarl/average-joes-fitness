import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://127.0.0.1:5000",
});

export default apiClient;
