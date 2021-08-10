import React from "react";
import "./components.css"

const Product = ({ product, cart, addProduct, products }) => {
  const { name, price, id } = product;

  //Add product to cart
  const selectProduct = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addProduct([...cart, product]);
  };

  //Delete product from cart
  const deleteProduct = (id) => {
    const products = cart.filter((product) => product.id !== id);
    //add products on state
    addProduct(products);
  };

  return (
    <div className="product-styles">
      <h2>{name}</h2>
      <p>${price}</p>
      {products ? (
        <button type="btn" onClick={() => selectProduct(id)}>
          Comprar
        </button>
      ) : (
        <button type="btn" onClick={() => deleteProduct(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Product;
