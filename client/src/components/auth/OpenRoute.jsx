import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const {user}=useSelector(state=>state.profile)

  if (user) {
    return <Navigate to="/" />
  } else {
    return  children ;
  }
}

export default OpenRoute;
