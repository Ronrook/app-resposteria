

import AddProduct from "../components/AddProduct";
import { FaTimes } from "react-icons/fa";

function ItemCart({producto}) {
  return (
    <div className="container m-1 md:m-2 py-4">
        <section className="bg-white ruended-lg shadow-lg p-6 text-gray-700">
            <div className="flex justify-between">
                <div className='flex items-center'>
                    <img  src={producto.img} alt={producto.name} className="h-15 w-20 object-cover mr-4" />
                    <div>
                        <p className="font-bold">{producto.nombre}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>
                        {producto.precio} COP
                    </span>
                </div>         
                <div className='flex items-center'>
                    <AddProduct/>
                </div>
                <div className='flex items-center'>0</div>
                <div className="flex items-center text-gray-500 text-xl hover:text-red-500">
                    <FaTimes/>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default ItemCart;