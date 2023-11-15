import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import GreenButton from '../Components/GreenButton';
import YellowButton from '../Components/YellowButton';
import style from './LandingPage.module.scss';


function LandingPage() {
    

    return (

        <section className={style.landingPageContainer}>
            <Header/>
            <section className={style.textContainer}>
                <h2>Välkommen till</h2>
                <h1>Valhalla</h1>
            </section>
            <GreenButton title='Logga in' />
            <YellowButton title='Beställ som gäst' />
        </section>
    )
};

export default LandingPage;