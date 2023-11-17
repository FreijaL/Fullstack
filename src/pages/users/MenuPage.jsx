import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './MenuPage.module.scss';

function MenuPage() {
    
    const navigate = useNavigate();

    return (

        <nav className={style.nav}>
            <header>
                <img className={style.pizzaIcon} src="./svg/pizza.svg" alt="pizza-icon" />
            </header>
            <ul className={style.navList}>
                <li className={style.navListItem + ' ' + style.navListItemImportant}>Meny</li>
                <li className={style.navListItem}>Min beställning</li>
                <li className={style.navListItem}>Orderhistorik</li>
                <li className={style.navListItem}>Om oss</li>
                <li className={style.navListItem}>FAQ</li>
            </ul>
            <footer className={style.footer}>
                <p>Logga in</p>
            </footer>
        </nav>
    )
};

export default MenuPage;