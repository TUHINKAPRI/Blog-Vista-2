import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" />
  } else {
    return  children ;
  }
}

export default OpenRoute;
