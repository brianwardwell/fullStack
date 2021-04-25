
import { Route, Redirect } from "react-router-dom";

//Private route component to access main part of the app
// PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
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

//  passing component to PrivateRoute as MainPage
// destructures the component and renames (capitalizes it)
// Use React Router Route component to conditionally render either the MainPage component or Redirect to login
