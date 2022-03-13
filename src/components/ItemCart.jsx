


import { FaTimes } from "react-icons/fa";
import BotonMinusPlus from "../components/BotonMinusPlus";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

function ItemCart({product, deleteItemCart}) {
    const {img, name, price, id} = product

    const [total, setTotal]= useState (price);
    const [counter, setCounter]= useState (1);

    const handleDelete = () =>  {
        deleteItemCart(id)
    }
   

    const handleMinus = () => {
        if (counter !== 1) {
            setTotal(total-price)
            setCounter(counter-1)
           
        }
        
    }

    const handleAdd = () => {
        setCounter(counter+1)
        if (counter === 2){
            setTotal((counter * total))
        }
        
        

    }

    return (
        <div className="container m-1 md:m-2 py-2">
            <section className="bg-white ruended-lg shadow-lg p-6 text-gray-700">
                <div className="flex justify-between">
                    <div className='flex items-center'>
                        <img  src={img} alt={name} className="h-15 w-20 object-cover mr-4" />
                        <div>
                            <p className="font-bold">{name}</p>
                        </div>
                    </div>
                    <div className='flex items-center text-center w-1/5 font-semibold text-base'>
                        <span>
                            {price} COP
                        </span>
                    </div>         
                    <div className='flex items-center text-center w-1/5 font-semibold text-base'>
                        <div onClick={handleMinus}>
                            <BotonMinusPlus
                                Icono={FiMinus}
                            />
                        </div>
                        <span className="mx-2 border text-center w-8">
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