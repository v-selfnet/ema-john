import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;