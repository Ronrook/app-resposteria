import { useState } from "react";
import Form from "../components/Form";
import ItemCart from "../components/ItemCart";
import { IoSadOutline } from "react-icons/io5";

function ShoppingCart({cart}) {
    const [total, setTotal] = useState (0);
     console.log(cart.length === 0)


    return (
       
        
        <div className="container m-3 md:m-18 py-8">
             {cart && cart.length? (
                 <>
                    <h1 className="font-black text-3xl text-center mb-6">CARRITO DE COMPRAS</h1>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">pruducto</h3>
                        <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">Precio</h3>
                        <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">Cant</h3>
                        <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">Total</h3>
                    </div>
                
                    {
                        cart.map(producto =>(
                            <ItemCart producto={producto}/>
                        ))
                    }
        
                    <div className="mt-6">
                        <div className="flex justify-center">
                            <p className="font-black text-3xl text-center pb-28 mt-4"> Datos de la compra</p>
                            <div className="mt-24">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </>
             ): (
                <>
                <h1 className="font-black text-3xl text-center mb-6">CARRITO DE COMPRAS</h1>
                <p className="text-gray-500 font-semibold text-2xl text-center mb-6">¡Aún no tienes productos en tu carrito!</p>
                <div className="text-gray-500 text-9xl text-center">
                    <IoSadOutline/>
                </div>
                
                
                </>
            
             )}

        </div>
    )
}

export default ShoppingCart;