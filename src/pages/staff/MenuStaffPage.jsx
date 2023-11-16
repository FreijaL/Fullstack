import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './MenuStaffPage.module.scss'

function MenuStaffPage() {
    

    return (

        <nav className={style.nav}>
            <header>
                <img className={style.pizzaIcon} src="../svg/pizza.svg" alt="pizza-icon" />
            </header>
            <ul className={style.navList}>
                <li className={style.navListItem + ' ' + style.navListItemImportant}>Köket</li>
                <li className={style.navListItem + ' ' + style.navListItemImportant}>Kassan</li>
                <li className={style.navListItem}>Historik & Kvitton</li>
                <li className={style.navListItem}>Snabbguide</li>
            </ul>
            <footer className={style.footer}>
                <p>Logga ut</p>
            </footer>
        </nav>
    )
};

export default MenuStaffPage;