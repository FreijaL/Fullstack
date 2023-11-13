import React from 'react';
import './CategoryCard.scss';

const CategoryCard = ( {category} ) => {
    return (
        <div className="category-card">
            <h2 className="category-card__title">{category}</h2>
        </div>
        
    )
}

export default CategoryCard;