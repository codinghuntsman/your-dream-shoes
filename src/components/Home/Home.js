import React from 'react';
import "./Home.css";
import UseProduct from './../Hooks/UseProduct';
import ProductReview from '../ProductReview/ProductReview';

const Home = () => {
    //------------Has imported from custom hooks here------------
    const [products, setProducts] = UseProduct();
    const newProducts = products.slice(0, 3);
    return (
        <div>
            <div className='home-page-style'>
                <div className='home-page-title'>
                    <h1 className='title-text'>Your dream shoes</h1>
                    <h5 className='title-description'>This brand is nike we provide top world class shoes.there are many features
                        of this shoes.high quality fiber fabric bonding latest designing also more and more
                        parts are there.we provide 100% users security that you
                        extra power for showing you.we think it's your dreams shoes 'catch it'.</h5>
                    <div className='btn-div'>
                        <button className='btn-style'><a href="https://media.wired.com/photos/59327c679be5e55af6c25666/3:2/w_1280%2Cc_limit/vivo.jpeg" target="_blank">Live demo</a></button>
                    </div>
                </div>
                <div className='image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQYP14pPbiprZl22jNQWMgRWMnHbLSS7eXA&usqp=CAU" alt="images" />
                </div>
            </div>
            <div className='product-parent-div'>
                <h3 className='all-title'>Customer reviews</h3>
                <div className='product'>
                    {
                        newProducts.map(product => <ProductReview key={product.id} product={product}></ProductReview>)
                    }
                </div>
            </div>
            <div className='review-btn'>
                <button>See all reviews</button>
            </div>
        </div>
    );
};

export default Home;