import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline'

//Login does NOT require axiosWithAuth

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(14),
  },
  form: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    marginTop: theme.spacing(3),
    width: "100%",
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "rgb(65, 10, 90)",
      color: "white"
  }
}))

const Login = () => {
  const [loginCred, setLoginCred] = useState({ username: "", password: "" });
  const style = useStyles();
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
    history.push('/users/notes') 
  };
    

  return (
    <Container maxWidth="xs">
      <div className={style.main}>
        <h1>Login</h1>
        <form className={style.form} onSubmit={submitLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  type="text" 
                  name="username"
                  required
                  fullWidth
                  label="Username"
                  variant="outlined"
                  onChange={handleNameChange}
                  value={loginCred.username}
                />     
            </Grid>  
            <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  name="password"
                  required
                  fullWidth
                  label="Password"
                  variant="outlined"
                  onChange={handlePasswordChange}
                  value={loginCred.password}
                />
            </Grid> 
            
          </Grid>
          <Button fullWidth className={style.submit}type="submit" variant="contained">
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
