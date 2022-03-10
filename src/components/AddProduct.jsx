
import imagen from "../assets/torta2.jpg";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
function AddProduct() {
    return (

        <div className="bg-blue-100 flex justify-between grid-cols-3  sm:mx-24  md:mx-24 md:px-2 md:py-19">
            <div className="flex">
                <div className="w-2 md:w-4">
                    <img className="h-4  md:h-24" src={imagen} alt=""/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm md:text-lg">Torta Unicornio</span>
                    <span className="font-semibold text-sm md:text-base">$400.00</span>

                </div>
            </div>

            <div className="flex justify-center">
            
                <FiMinus></FiMinus>
                <input className="m-2 border text-center w-6" type="text" value="1"/>
                <FiPlus></FiPlus>
            </div>
            <span className="font-semibold text-sm md:text-lg  lg:text-xl">$400.00</span>
        </div>
          
    
         
    );
}

export default AddProduct;