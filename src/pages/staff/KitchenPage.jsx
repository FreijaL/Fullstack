import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import KitchenOrderCard from '../../Components/KitchenOrderCard';
import HeaderStaff from '../../Components/HeaderStaff';
import style from './KitchenPage.module.scss';

function KitchenPage() {
    

    return (

        <section className={style.kitchenPageContainer}>
            <HeaderStaff />
            <KitchenOrderCard />
        </section>
    )
};

export default KitchenPage;