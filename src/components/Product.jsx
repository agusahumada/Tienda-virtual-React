import React from "react";
import "./components.css";

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
    <div className="product-styles container">
      <div className="row">
        <div className="col-sm-7">
          <div className="card mt-5 mb-3">
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">US${price}</p>
              {products ? (
                <button type="btn" className="btn btn-primary" onClick={() => selectProduct(id)}>
                  Comprar
                </button>
              ) : (
                <button type="btn" className="btn btn-primary" onClick={() => deleteProduct(id)}>
                  Eliminar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
