import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginField from '../Components/LoginField';
import GreenButton from '../Components/GreenButton';
import YellowButton from '../Components/YellowButton';
import Header from '../Components/Header';
import style from './LoginPage.module.scss';


function LoginPage() {
    

    return (

        <section className={style.loginPageContainer}>
            <Header />
            <section className={style.fieldContainer}>
                <LoginField title='Användarnamn:' type='text' />
                <LoginField title='Lösenord:' type='password' />
                <p className={style.forgotPassword}>Glömt lösenord?</p>
            </section>
            <GreenButton title='Logga in' />
            <YellowButton title='Skapa konto' />
        </section>
        
    )
};

export default LoginPage;