import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className='navbar-style'>
            <nav>
                <CustomLink to='/home'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default NavBar;