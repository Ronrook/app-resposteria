import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar({ toggleOpen }) {
    return (
            <nav className="flex flex-col items-center h-20 bg-white text-black relative shadow-sm md:md:flex-row justify-between">
                <img src={logo} alt="logo" className="w-20 md:w-12 pl-4" />

                <div className=" px-4 cursor-pointer md:hidden " onClick={toggleOpen}>
                    <FaBars></FaBars>
                </div>

                <div className="pr-8 hidden md:flex flex-row ">
                    <Link to="/" className="p-3">
                        Inicio
                    </Link>
                    <Link to="/productos" className="p-3">
                        Productos
                    </Link>
                    <Link to="/pedido" className="p-3">
                        Pedido
                    </Link>
                    <Link to="/carrito" className="p-3">
                        Carrito
                    </Link>
                </div>
            </nav>
    );
}

export default Navbar;
