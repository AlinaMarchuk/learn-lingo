import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  return auth.currentUser ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
