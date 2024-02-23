import React, { useState, useEffect } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:3200/products')
        result = await result.json();
        setProducts(result);
    }
    console.log(products);

    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <ul>
                 <li><b>S. No</b></li>
                 <li><b>Name</b></li>
                 <li><b>Price</b></li>
                 <li><b>Category</b></li>
                 <li><b>Company</b></li>
             </ul>
            {products.map((item,index)=>
                 <ul>
                 <li>{index+1}</li>
                 <li>{item.name}</li>
                 <li>{item.price}</li>
                 <li>{item.category}</li>
                 <li>{item.company}</li>
             </ul>

            )}

        </div>
    )
}
export default ProductList;