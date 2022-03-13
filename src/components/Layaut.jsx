import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";
// import Footer from "./Footer";




function Layaut({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

//   useEffect(()=>{
//     const hideMenu = () => {
//         if (Window.innerWidth > 768 && isOpen) {
//         setIsOpen(false)
//         }
//     }

//     Window.addEventListener('resize', hideMenu)
//     return () => {
//       Window.removeEventListener('resize', hideMenu)

//     };
    
// });


 
  return (
        <div className="h-screen">
            <Navbar toggleOpen={toggleOpen}/>
            
            {isOpen && <HamburgerMenu/>}
            {children}
        </div>
  )
}

export default Layaut;