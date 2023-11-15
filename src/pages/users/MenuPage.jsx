import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './MenuPage.module.scss';

function MenuPage() {
    
    const navigate = useNavigate();

    return (

        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navListItem}>Menu</li>
                <li className={style.navListItem}>Contact</li>
                <li className={style.navListItem}>FAQ</li>
            </ul>
        </nav>
    )
};

export default MenuPage;