
import Card from "../components/Card";
import data from '../data/data';


function Products({addItemCart}) {
    
    return (
      <div className=" container  mx-auto bg-pink-100">
            <div className="grid grid-cols-1  content-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(producto => (
                        <Card
                            key={producto.id}
                            producto={producto} 
                            addItemCart={addItemCart}/>
                    ))
                }
          
          
          
          
          </div>
        
        
          
      </div>
    );
  }
  
  export default Products;