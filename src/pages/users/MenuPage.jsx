import React from 'react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MenuPage() {
    
    const navigate = useNavigate();

    return (

        <nav>
            <ul>
                <li>Menu</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
        </nav>
    )
};

export default MenuPage;