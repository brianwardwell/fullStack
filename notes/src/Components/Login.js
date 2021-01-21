import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

//Login does NOT require axiosWithAuth

const Login = () => {
  const [loginCred, setLoginCred] = useState({ username: "", password: "" });
  const history = useHistory();
  const handleNameChange = (e) => {
    setLoginCred({ ...loginCred, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setLoginCred({ ...loginCred, password: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', loginCred)
    .then(res => { 
        localStorage.setItem('token', res.data.token)  
        history.push('/users/notes') 
    })
    .catch(err => console.log("ERROR"));
  };
    

  return (
    <div>
      <form onSubmit={submitLogin}>
        <h1>Login</h1>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={loginCred.username}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="name"
            value={loginCred.password}
            onChange={handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
