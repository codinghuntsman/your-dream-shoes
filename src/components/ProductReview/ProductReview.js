import React from 'react';
import "./ProductReview.css";
import { AiFillStar } from 'react-icons/ai';

const ProductReview = ({ product }) => {
    const { name, img, review, ratings } = product;
    return (
        <div className='product-review'>
            <img src={img} alt="images" />
            <div className='product-description'>
                <h6>{name}</h6>
                <p className='ratings'>Review: <small>{review}</small></p>
                <p className='ratings'>Ratings: <small className='ratings-icon'> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> {ratings}</small></p>
            </div>
        </div>
    );
};

export default ProductReview;