import React from 'react';
import './Header.scss';
import Pizza from '/svg/pizza.svg';
import Cart from '/svg/cart.svg';

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