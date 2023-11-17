import React from 'react';
import style from './Header.module.scss';
import Pizza from '/svg/pizza.svg';
import Cart from '/svg/cart.svg';

import React from 'react';
import style from './Header.module.scss' ;
import Pizza from '../../public/svg/pizza.svg';
import Cart from '../../public/svg/cart.svg';

//Displays burger menu, title and cart icon.
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