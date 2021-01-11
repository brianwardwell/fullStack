import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="buttonContainer">
      <button>
        <Link to="/users/register">Sign Up</Link>
      </button>
      <button>
        <Link to="/users/login">Login</Link>
      </button>
      </div>
    </div>
  );
};

export default Home;
