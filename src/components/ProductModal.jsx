//ProductModal.jsx

import React from 'react';
import style from './ProductModal.module.scss';

//Receives a product and displays its image, name, ingredients, price, and description.

const ProductModal = ( { image, title, removeIngredients, addIngredients, price }) => {
    return (
        <div className={style.productModal}>
            <img className={style.productModalImage} src={image} alt={props.product.name} />
            <h2 className={style.productModalTitle}>{title}</h2>
            <p className={style.productModalRemoveIngredients}>{removeIngredients}</p>
            <p className={style.productModalAddIngredients}>{addIngredients}</p>
            <p className={style.productModalPrice}>{price}</p>
        </div>
    )
}

export default ProductModal;