import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route} from "react-router-dom";
import Layaut from './components/Layaut';
import { useEffect, useState } from "react";

function App() {
    const [cart, setCart]= useState ([]);
    const [total, setTotal]= useState (0);
    const [counter, setCounter]= useState (1);

    const addItemCart = product => {
        const response = cart.find(item => item.id === product.id)
    
        if (response === undefined) {
            setCart([...cart, product])
        }else{
        
            console.log('in the cart')
        }
        
    }

    const deleteItemCart = id => {
        const updatteCart = cart.filter(item => item.id !== id)
        setCart(updatteCart)
        
    }
    const updateTotal = () =>{
        
        setTotal(total * counter )
        
    }


    
    useEffect (()=>{
        console.log('useEFFECT')
    },[cart])


    console.log(counter)


    return (
        <div className="bg-yellow">
            <Layaut>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/productos" element={
                        <Products 
                            addItemCart={addItemCart} 
                        />
                    }/>
                    <Route path="/pedido" element={<Order />}/>
                    <Route path="/carrito" element={
                        <ShoppingCart 
                            cart={cart}
                            total={total}
                            counter={counter}
                            setCounter={setCounter}
                            deleteItemCart={deleteItemCart} 
                        />
                    }/>
                </Routes>
            </Layaut>
        </div>
    );
}

export default App;
