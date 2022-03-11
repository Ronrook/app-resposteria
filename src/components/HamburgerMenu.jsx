import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";


function HamburgerMenu() {
    return (
        <div className=" mt-3 grid grid-rows-3 text-center items-center bg-pink-400 md:hidden">
        
            <Link to="/" className='p-3'>
                    Inicio
                </Link>
                <Link to="/productos" className='p-3'>
                    Productos
                </Link>
                <Link to="/pedido" className="p-3">
                    Pedido
                </Link>
                <Link to="/carrito" className='p-3'>
                    Carrito
                </Link> 
            
        </div>
  )
}
export default HamburgerMenu;