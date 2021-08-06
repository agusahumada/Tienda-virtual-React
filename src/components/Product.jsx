import React from 'react';

const Product = ({product}) => {

    const { name, price, id } = product;

    //Add product to cart
    const selectProduct = id => {
        console.log('comprando...', id);
    }

    return(
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            <button
                type="btn"
                onClick={() => selectProduct(id)}
            >Comprar</button>
        </div>
    )
}

export default Product;