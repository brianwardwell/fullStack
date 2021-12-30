import axios from "axios";

 const axiosWithoutAuth = () => {
  
  return axios.create({
    baseURL: "https://note-clone.herokuapp.com/"
  
  });
};

export default axiosWithoutAuth;

