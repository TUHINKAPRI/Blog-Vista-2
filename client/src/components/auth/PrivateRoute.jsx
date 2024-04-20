
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {

  const token=localStorage.getItem('token')
  console.log(token)
  if(token){
    return children
  }else{
   return  <Navigate to='/sign-in' />
  }

}

export default PrivateRoute