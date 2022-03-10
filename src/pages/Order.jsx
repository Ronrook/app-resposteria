


import MassCake from "../components/MassCake";
import Form from "../components/Form";


function Order() {
  return (
    <div className="bg-pink-100 ">
        <div className="mt-12">
            <div>
                <h2 className="font-black text-3xl text-center">Pedido personalizado</h2>
                <div>
                    <MassCake/> 
                </div>
                
            </div>
            <div className="content-center">
                <p className="font-black text-3xl text-center mb-4"> Datos de la compra</p>
                <Form></Form>
            </div>
        </div>
    </div>
  )
}

export default Order;