import Card from "../components/Card";



function Products() {
    return (
      <div className="bg-pink-100">
          <div className="grid grid-cols-1 p-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card/>
          <Card/>
          <Card/>
          </div>
        
        
          
      </div>
    );
  }
  
  export default Products;