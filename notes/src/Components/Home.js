import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//link for a background img: <img src="https://unsplash.com/photos/8u2bw82Mve0"/>
const Home = () => {
  return (
    <div className="homeButtons">
      <Button variant='contained'>
        <Link to="/users/register">Sign Up</Link>
      </Button>
      <Button variant='contained'>
        <Link to="/users/login">Login</Link>
      </Button>
    </div>
  );
};

export default Home;
