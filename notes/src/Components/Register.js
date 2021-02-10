import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import axiosWithoutAuth from '../axiosWithoutAuth';

//Register does NOT require axiosWithAuth

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(14)
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
}));

const Register = () => {
  const [regCred, setRegCred] = useState({ username: "", password: "" });

  const style = useStyles();
  const history = useHistory();

  const handleNameChange = (e) => {
    setRegCred({ ...regCred, username: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setRegCred({ ...regCred, password: e.target.value });
  };
  //changed url from /users to /users/signIn, will do same for login
  const submitNewUser = (e) => {
    e.preventDefault();
    axiosWithoutAuth.post('/api/auth/signIn', regCred)
    .then(res => {
        console.log("RES STATUS", res.status)
        if (res.status === 200){
            history.push('/users/login')
        } else{
            const fail = document.createElement('p').innerText('This failed!')
            document.body.appendChild(fail)
        }
    })
    
    setRegCred({ username: "", password: "" });
    history.push("/users/login");
  };
  
  return (
    <Container maxWidth="xs">
      <div className={style.main}>
        <h1>Register</h1>
        <form className={style.form} onSubmit={submitNewUser}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="username"
                  required
                  fullWidth
                  label="Create Username"
                  variant="outlined"
                  onChange={handleNameChange}
                  value={regCred.username}
                />     
            </Grid>  
            <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  name="password"
                  required
                  fullWidth
                  label="Create Password"
                  variant="outlined"
                  onChange={handlePasswordChange}
                  value={regCred.password}
                />
            </Grid> 
            
          </Grid>
          <Button fullWidth className={style.submit}type="submit" variant="contained">
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
