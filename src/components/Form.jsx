
// import { FaWhatsapp } from "react-icons/fa";


function Form() {
    return (
        <div className="w-96">
            <form className="bg-white shadow-md rounded-lg py-10 px-5">

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        Nombre completo
                    </label>
                    <input
                        id= "nombre"
                        type="text"
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="contacto" className="block text-gray-700 uppercase font-bold">
                        Número de contacto
                    </label>
                    <input
                        id="contacto" 
                        type="text"
                        placeholder="Número de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div  className="mb-5">
                    <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">
                        Dirección de entrega
                    </label>
                    <input 
                        id="direccion" 
                        type="text"
                        placeholder="Dirección de entrega"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="nota" className="block text-gray-700 uppercase font-bold">
                        agrega una nota
                    </label>
                    <textarea 
                        id="nota"
                        placeholder="Agrega un comentario a tu pedido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    /> 
                </div>

                <input 
                    type="submit" 
                    className="bg-pink-600 hover:bg-pink-700 w-full rounded-md p-3 
                    text-white uppercase font-bold cursor-pointer"
                    value="Finalizar compra" 
                />

            </form>
        
        </div>
    )
    }
export default Form;