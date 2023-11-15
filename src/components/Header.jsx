import React from 'react';
import style from './Header.module.scss';
import Pizza from '/svg/pizza.svg';
import Cart from '/svg/cart.svg';

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <img className={style.headerPizza} src={Pizza}></img>
            <h1 className={style.headerTitle}>Valhalla</h1>
            <img className={style.headerCart} src={Cart}></img>
        </div>
    )
}

export default Header;