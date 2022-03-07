import Navbar from "./Navbar";




function Layaut({children}) {
  return (
    <div className="h-screen">
        <Navbar></Navbar>
        {children}
    </div>
  )
}
 export default Layaut;