import AddProduct from "../components/AddProduct";
import Form from "../components/Form";


function ShoppingCart() {
  return (
    <div className="bg-pink-100 ">
        <div className="mt-6">
            <div className="flex flex-col md:flex justify-center">
                <h2 className="font-black text-3xl text-center py-24">Carrito de compras</h2>
                <AddProduct/>
                
            </div>
            <div className="flex justify-center">
                <p className="font-black text-3xl text-center py-28"> Datos de la compra</p>
                <div className="mt-24">
                    <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart;