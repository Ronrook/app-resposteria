

import imagen from "../assets/torta2.jpg";
import { Link} from "react-router-dom";

function Card() {
  return (
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
        
        <img className="p-8 rounded-t-lg" src={imagen} alt="logo" />

        <div class="px-2 pb-5 flex flex-col">  
            
            <div class="flex flex-col justify-between items-center">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Torta Casera</h5>
                <span class="text-3xl font-bold text-gray-900 dark:text-black text-center">$599</span>
                <button className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Add to cart</button>
                
            </div>
        </div>
    </div>
        
        
    





    
  )
}

export default Card;