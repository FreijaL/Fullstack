//ProductCard.jsx

import React from 'react';
import style from './ProductCard.module.scss';


//Receives the product name, ingredients, and price to display a product card.
const ProductCard = ( {product, ingredients, price} ) => {
    return (
        <div className={style.productCard}>
            <div className={style.productCardDivider}>
                <h2 className={style.productCardTitle}>{product}</h2>
                <p className={style.productCardIngredients}>{ingredients}</p>
            </div>
            <p className={style.productCardPrice}>{price}</p>
        </div>
    )
}

export default ProductCard;