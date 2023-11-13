//Header.jsx

import React from 'react';
import './Header.scss';
import Pizza from '../../public/svg/pizza.svg';
import Cart from '../../public/svg/cart.svg';

//Displays burger menu, title and cart icon.
const Header = () => {
    return (
        <div className="header-container">
            <img className="header-pizza" src={Pizza}></img>
            <h1 className="header-title">Valhalla</h1>
            <img className="header-cart" src={Cart}></img>
        </div>
    )
}

export default Header;