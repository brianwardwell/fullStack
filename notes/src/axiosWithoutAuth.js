import axios from "axios";

 const axiosWithoutAuth = () => {
  
  return axios.create({
    baseURL: "http://localhost:5000"
  
  });
};

export default axiosWithoutAuth;

