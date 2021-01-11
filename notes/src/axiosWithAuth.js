import axios from "axios";

export const axiosWithAuth = () => {
    console.log("Local Storage", localStorage.token)
  const token = localStorage.getItem("token");
console.log('Token?', token)
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token,
    },
  });
};
