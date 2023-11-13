//CategoryCard.jsx

import React from 'react';
import './CategoryCard.scss';


//Displays a category in the category menu.
const CategoryCard = ( {category} ) => {
    return (
        <div className="category-card">
            <h2 className="category-card__title">{category}</h2>
        </div>
        
    )
}

export default CategoryCard;