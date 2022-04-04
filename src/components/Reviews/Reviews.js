import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import UseProduct from './../Hooks/UseProduct';
import "./Reviews.css";

const Reviews = () => {
    const [products, setProducts] = UseProduct();
    return (
        <div className='product-parent-div'>
            <h4 className='all-title'>All customer reviews</h4>
            <div className='product'>
                {
                    products.map(product => <ProductItem key={product.id} product={product}></ProductItem>)
                }
            </div>
        </div>
    );
};

export default Reviews;