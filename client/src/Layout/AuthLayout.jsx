import NavBar from "@/components/Header/NavBar"





function AuthLayout( {children}) {
  return (
    <div  className="md:max-w-6xl mx-auto sm:max-w-2xl max-w-80"  >
      <NavBar/>
      {children}
    </div>
  )
}

export default AuthLayout