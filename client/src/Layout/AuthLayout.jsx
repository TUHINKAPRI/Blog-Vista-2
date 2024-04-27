import NavBar from "@/components/Header/NavBar"





function AuthLayout( {children}) {
  return (
    <div  className="md:max-w-7xl mx-auto sm:max-w-2xl px-3 max-w-80"  >
      <NavBar/>
      {children}
    </div>
  )
}

export default AuthLayout