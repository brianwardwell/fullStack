import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import backImage from "../images/prism.png";
// import Paper from "@material-ui/core/Paper"

//link for a background img: <img src="https://unsplash.com/photos/8u2bw82Mve0"/>
const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backImage})`,
    display: "flex",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topButton: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    // marginBottom: theme.spacing(4)
    backgroundColor: "rgb(65, 10, 90)",
    color: "white",
  },
  bottomButton: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    backgroundColor: "rgb(65, 10, 90)",
    color: "white"
  },
  typer: {
    color: "rgb(65, 10, 90)",
    marginBottom: "30px"
  }
}));

const Home = () => {
  const style = useStyles();
  const history = useHistory();
  const onClickReg = () => {
    history.push("/users/register");
  };
  const onClickLog = () => {
    history.push("/users/login");
  };
  return (
    <div className={style.homeContainer}>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={style.container}>
        <Typography className={style.typer} variant="h3">EverClone</Typography>
          <Typography variant="h5">Not A Member?</Typography>
          <Button
            onClick={onClickReg}
            fullWidth
            className={style.topButton}
            variant="contained"
          >
            Sign Up
          </Button>
          <Typography variant="h5">Already A Member?</Typography>
          <Button
            conClick={onClickLog}
            fullWidth
            className={style.bottomButton}
            variant="contained"
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
};
// "/users/register"
export default Home;
