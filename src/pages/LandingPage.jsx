import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import OrderConfirmation from '../components/OrderConfirmation';


function LandingPage() {
    

    return (

        <>
        <Header/>
        <OrderConfirmation/>
        </>
    )
};

export default LandingPage;