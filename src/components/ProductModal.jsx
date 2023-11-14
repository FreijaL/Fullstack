//ProductModal.jsx

import React from 'react';
import './ProductModal.scss';

//Receives a product and displays its image, name, ingredients, price, and description.

const ProductModal = ( { image, title, removeIngredients, addIngredients, price }) => {
    return (
        <div className="product-modal">
            <img className="product-modal__image" src={image} alt={props.product.name} />
            <h2 className="product-modal__title">{title}</h2>
            <p className="product-modal__remove-ingredients">{removeIngredients}</p>
            <p className="product-modal__add-ingredients">{addIngredients}</p>
            <p className="product-modal__price">{price}</p>
        </div>
    )
}

export default ProductModal;