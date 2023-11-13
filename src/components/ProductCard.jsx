//ProductCard.jsx

import React from 'react';
import './ProductCard.scss';


//Receives the product name, ingredients, and price to display a product card.
const ProductCard = ( {product, ingredients, price} ) => {
    return (
        <div className="product-card">
            <div className="product-card__divider">
                <h2 className="product-card__title">{product}</h2>
                <p className="product-card__ingredients">{ingredients}</p>
            </div>
            <p className="product-card__price">{price}</p>
        </div>
    )
}

export default ProductCard;