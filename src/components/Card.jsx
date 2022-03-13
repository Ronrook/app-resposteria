

import Boton from "./Boton";

function Card({product, addItemCart}) {
    

    return (
        <div className="max-w-xs   bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
            
            <img className="p-4 rounded-t-lg object-cover" src={product.img} alt={product.name} />

            <div className="px-2 pb-5">  
                
                <div className="flex flex-col items-center">
                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black"> {product.name} </h5>
                    <span className="text-xl font-bold text-gray-900 dark:text-black text-center">{product.price}</span>
                    <div 
                        onClick={()=> addItemCart(product)}> 
                        <Boton/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Card;