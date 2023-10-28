import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  return auth.currentUser ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
