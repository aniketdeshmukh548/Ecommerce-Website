import { Link } from "react-router-dom";


const PRODUCTS=[
    {id:'p1',title:'Product 1'},
    {id:'p2',title:'Product 2'},
    {id:'p3',title:'Product 3'},{ 
  id:1,    
  title: 'Colors',      
  price: 100,     
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',     
  }
]


function ProductPage(){
    return(
        <>
        <h2>Products Page</h2>
        <ul>
            {PRODUCTS.map((prod)=>(
                <li key={prod.id}>
                    <Link to={`/product/${prod.id}`}>{prod.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ProductPage;