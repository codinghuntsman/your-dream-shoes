import React from 'react';
import "./ProductItem.css";

const ProductItem = ({ product }) => {
    const { name, img, ratings, review } = product;
    return (
        <div className='product-review'>
            <img src={img} alt="images" />
            <div className='product-description'>
                <h6>{name}</h6>
                <p className='ratings'>Review: <small>{review}</small></p>
                <p className='ratings'>Ratings: <small>{ratings}</small></p>
            </div>
        </div>
    );
};

export default ProductItem;