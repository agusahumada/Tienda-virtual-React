import React from 'react';

const Product = ({product, cart, addProduct, products}) => {

    const { name, price, id } = product;

    //Add product to cart
    const selectProduct = id => {
        const product = products.filter(product => product.id === id)[0];
        addProduct([
            ...cart,
            product
        ]);
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