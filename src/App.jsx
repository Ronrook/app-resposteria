import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route} from "react-router-dom";
import Layaut from './components/Layaut';

console.log(Home)
function App() {
    return (
        <div className="bg-yellow">
            <Layaut>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/productos" element={<Products />}/>
                    <Route path="/pedido" element={<Order />}/>
                    <Route path="/carrito" element={<ShoppingCart />}/>
                </Routes>
            </Layaut>
        </div>
    );
}

export default App;
