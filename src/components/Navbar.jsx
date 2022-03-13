import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";


function Navbar({ toggleOpen }) {
    return (
            <nav className="flex justify-between  items-center h-16 bg-white text-black 
                relative shadow-sm md:md:flex-row"
            >
                <Link to="/" className="pl-8">
                     <img src={logo} alt="logo" className="w-20 md:w-12 pl-4" />   
                </Link>
                

                <div className=" flex px-4 cursor-pointer md:hidden " onClick={toggleOpen}>
                    <div className=" text-gray-500 text-3xl flex items-center">
                        <FaBars/>
                    </div>
                    
                    <Link to="/carrito" className="p-3">
                        <div className=" text-gray-500 text-4xl ">
                            <FaShoppingBasket/>
                        </div>
                    </Link>
                    
                </div>

                <div className="pr-8 hidden md:flex flex-row ">
                    <Link to="/" className="p-4">
                        Inicio
                    </Link>
                    <Link to="/productos" className="p-4">
                        Productos
                    </Link>
                    <Link to="/pedido" className="p-4">
                        Pedido
                    </Link>
                    <Link to="/carrito" className="p-4">
                        <div className=" text-gray-500 text-3xl">
                            <FaShoppingBasket/>
                        </div>
                    </Link>
                </div>
            </nav>
    );
}

export default Navbar;
