import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.profile);
  if (user) {
    return children;
  } else {
    return <Navigate to="/sign-in" />;
  }
}

export default PrivateRoute;
