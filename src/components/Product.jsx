import React from 'react';

const Product = ({product}) => {

    const { name, price, id } = product;

    return(
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    )
}

export default Product;