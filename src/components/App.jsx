


import Products from './Products';
import Home from './Home';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="bg-yellow">

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productos" element={<Products />}/>
        </Routes>
    </div>
  );
}

export default App;
