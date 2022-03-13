
import Card from "../components/Card";
import data from '../data/data';


function Products({addItemCart}) {
    
    return (
      <div className="bg-pink-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-28 p-44 md:p-24  grid grid-cols-1   gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(product => (
                        <Card
                            key={product.id}
                            product={product} 
                            addItemCart={addItemCart}/>
                    ))
                }
          
          
          </div>
          
      </div>
    );
  }
  
  export default Products;