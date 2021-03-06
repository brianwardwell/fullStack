
import { Route, Redirect } from "react-router-dom";

//Private route component to access main part of the app

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(<Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/users/login" />
      )
    }
  />)
};

export default PrivateRoute;
