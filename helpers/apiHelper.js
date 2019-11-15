import axios from "axios";
import { getToken } from "./authHelper";

export const api = axios.create({
  baseURL: "http://localhost:5000/"
});
//api.defaults.headers.common['Authorization'] = getToken();

