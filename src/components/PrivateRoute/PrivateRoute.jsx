import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/config";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  return auth.currentUser ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
