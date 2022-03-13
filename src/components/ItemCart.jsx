


import { FaTimes } from "react-icons/fa";
import BotonMinusPlus from "../components/BotonMinusPlus";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function ItemCart({producto, deleteItemCart, total,counter, setCounter}) {
    const {img, nombre, precio, id} = producto

    const handleDelete = () =>  {
        deleteItemCart(id)
    }

    const handleMinus = () => {
        if (counter !== 1) {
            setCounter(counter-1)
        }
        
    }

    const handleAdd = () => {
        setCounter(counter+1)
    }

    return (
        <div className="container m-1 md:m-2 py-2">
            <section className="bg-white ruended-lg shadow-lg p-6 text-gray-700">
                <div className="flex justify-between">
                    <div className='flex items-center'>
                        <img  src={img} alt={nombre} className="h-15 w-20 object-cover mr-4" />
                        <div>
                            <p className="font-bold">{nombre}</p>
                        </div>
                    </div>
                    <div className='flex items-center text-center w-1/5 font-semibold text-base'>
                        <span>
                            {precio} COP
                        </span>
                    </div>         
                    <div className='flex items-center text-center w-1/5 font-semibold text-base'>
                        <div onClick={handleMinus}>
                            <BotonMinusPlus
                                Icono={FiMinus}
                            />
                        </div>
                        <span className="px-4 bg-orange-400">
                            {counter}
                        </span>
                        <div onClick={handleAdd}>
                            <BotonMinusPlus
                                Icono={FiPlus}   
                            />
                        </div>
                    </div>
                    <div className='flex items-center text-center w-1/5 font-semibold text-sm'>{total}</div>
                    <div className="flex items-center text-gray-500 text-xl hover:text-red-500" 
                        onClick={handleDelete}>
                        <FaTimes/>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default ItemCart;