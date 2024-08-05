import axios from "axios";

export default function getAxios() {
  let headers = {"Content-Type": "application/json"}

  const backendAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    responseType: "json",
    headers: headers,
  });
  return backendAxios
}