



import React from 'react'

function CardTotalBuy({total}) {
    return (
        <div className="container m-1 md:m-1 py-2">
        <section className="bg-white ruended-lg shadow-lg p-6 text-gray-700">
                <div className='flex justify-between'>
                    <h3 className='font-semibold text-gray-600 text-xl'>Total de la compra</h3>
                    <h3 className='font-semibold text-gray-600 text-xl'>{`$ ${total}`}</h3>
                </div>
                
            </section>
        
        </div>
    )
}


export default CardTotalBuy;