import { useContext, useState } from "react"
import Card from "./Card"


const Products = () =>{

    type productType = {
        id:number,
        name:string,
        price:string,
    }



    const dummyProducts = [{"name":"Laptop", "price" : "150000"},{"name":"Iphone", "price" : "80000"},{"name":"Monitor", "price" : "20000"}]
    
    const [products, setProducts] = useState<productType[]>([]); 
                    
    const fetchProducts = async () => {
        try {
          const response = await fetch("http://localhost:5000/products")
          const data = await response.json()
          setProducts(data)
        } catch (error) {
          console.error("Error fetching products:", error)
        }
      }
    
    
    return (
        <div>
            <h1>Products</h1>
            
            <button onClick={fetchProducts}>Fetch Products</button>

            
            <hr />

            {
                products.map((product,id) => {
                    
                    return (
                        
                        <Card key={product.id} name={product.name} price={product.price}/>
                    )
                })
            }
        </div>
    )
}

export default Products