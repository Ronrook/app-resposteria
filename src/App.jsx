import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route} from "react-router-dom";
import Layaut from './components/Layaut';
import { useEffect, useState } from "react";

function App() {
    const [cart, setCart]= useState ([]);

    const addCart = producto => {
        setCart([...cart, producto])
    }
    
    console.log(cart)
    return (
        <div className="bg-yellow">
            <Layaut>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/productos" element={<Products addCart={addCart} />}/>
                    <Route path="/pedido" element={<Order />}/>
                    <Route path="/carrito" element={<ShoppingCart cart={cart} />}/>
                </Routes>
            </Layaut>
        </div>
    );
}

export default App;
