import react from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/signIn">Sign Up</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
