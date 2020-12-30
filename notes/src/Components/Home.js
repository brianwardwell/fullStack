import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/users/register">Sign Up</Link>
      </button>
      <button>
        <Link to="/users/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
