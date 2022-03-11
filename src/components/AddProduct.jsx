

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
function AddProduct() {
    
    const [numero, setNumero] = useState (1);

    const handleMinus = () => {
        setNumero(numero-1)
    }

    const handleAdd = () => {
        setNumero(numero+1)
    }

    
    
    return (

        <div className="flex items-center">
            <div className="border-4 border-gray-200  rounded-md p-3 text-gray-700 cursor-pointer hover:bg-pink-300 hover:text-white" onClick={handleMinus}>
                 <FiMinus/>
            </div>
           
            <span className="mx-2">{numero}</span>
            <div className="border-4 border-gray-200  rounded-md p-3 text-gray-700 cursor-pointer hover:bg-pink-300 hover:text-white" onClick={handleAdd}>
                <FiPlus/>
            </div>
            
            
        </div>
           
    );
}

export default AddProduct;