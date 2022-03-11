

import Boton from "./Boton";

function Card({producto, addCart}) {
 

  return (
    <div className="max-w-xs   bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
        
        <img className="p-4 rounded-t-lg object-cover" src={producto.img} alt={producto.nombre} />

        <div className="px-2 pb-5">  
            
            <div className="flex flex-col items-center">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black"> {producto.nombre} </h5>
                <span className="text-xl font-bold text-gray-900 dark:text-black text-center">{producto.precio}</span>
                <div onClick={()=> addCart(producto)}> 
                  <Boton/>
                </div>
            </div>
        </div>
    </div>
        
        
    





    
  )
}

export default Card;