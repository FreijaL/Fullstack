//CategoryCard.jsx

import React from 'react';
import style from './CategoryCard.module.scss' ;


//Displays a category in the category menu.
const CategoryCard = ( {category} ) => {
    return (
        <div className={style.categoryCard}>
            <h2 className={style.categoryCardTitle}>{category}</h2>
        </div>
        
    )
}

export default CategoryCard;