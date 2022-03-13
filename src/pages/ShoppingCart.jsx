import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { IoSadOutline } from "react-icons/io5";
import Form from "../components/Form";
import ItemCart from "../components/ItemCart";
import CardTotalBuy from "../components/CardTotalBuy";



function ShoppingCart({cart, deleteItemCart}) {

    const [total, setTotal]= useState (0);

    useEffect (()=>{
        const totalBuy = cart.reduce((total, product)=> total + (product.cant * 
            product.price), 0)
        
            setTotal( totalBuy)
        
    },[cart])



    const totalItems = cart.length
    
    return (
       
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {cart && cart.length? (
                <>
                    <section className="mb-30 bg-white rounded-lg  p-6 tex-gray-700"> 

                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Carrito de compras</h1>
                            <h2 class="font-semibold text-2xl">{
                                totalItems < 2 ? `${totalItems} Producto`: `${totalItems} Productos`}
                            </h2>
                        </div>


                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">pruducto</h3>
                            <h3 className="font-semibold text-gray-600 text-base uppercase w-1/5 text-center">Precio</h3>
                            <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">Cant</h3>
                            <h3 className="font-semibold text-gray-600 text-sm uppercase w-1/5 text-center">Total</h3>
                        </div>
                    
                        {
                            cart.map(product =>(
                                <ItemCart 
                                    key={product.id}
                                    product={product}
                                    deleteItemCart={deleteItemCart}
                                />
                            ))
                        }
                        
                    </section>

                    <CardTotalBuy 
                        total={total}
                    />

                    
                    <div className="mt-8">
                        <div className="">
                            
                            <h1 className="font-black text-3xl text-center mb-6">DATOS DE LA COMPRA</h1>
                            <div className="my-24 flex justify-center">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </>
             ): (
                <>
                    <div className="bg-white  h-screen flex flex-col justify-center items-center">
                        <h1 className="mb-14 font-black text-gray-500 text-xl  sm:text-3xl md:text-5xl      lg:text-7xl">CARRITO DE COMPRAS</h1>
                        <p className="mb-14 font-black text-gray-500 text-xl sm:text-xl  md:text-3xl lg:text-5xl">¡Aún no tienes productos en tu carrito!</p>
                        <div className="text-gray-500 text-9xl flex justify-center">
                            <IoSadOutline/>
                        </div>
                        
                        <Link to="/productos" className="py-4 px-10 bg-pink-700 rounded-full text-3xl text-white
                            hover:bg-pink-600 transition duration-300 ease-in-out flex items-center"
                        >
                            Compra Ahora 
                            <FaShoppingBasket className="w-6 h-6 ml-4 text-4xl"/>
                        </Link>
                    </div>
                
                
                </>
            
            )}

        </div>
    )
}

export default ShoppingCart;