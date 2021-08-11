import React from "react";
import "./components.css";
import Product from "./Product";

const Cart = ({ cart, addProduct }) => (
  <div className="cart">
    <h5 className="cart-title">Carrito de compras {cart.length}</h5>
    <div className="cart-content">

      {cart.length === 0 ? (
        <p>No hay elementos en el carrito</p>
      ) : (
        cart.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            addProduct={addProduct}
          />
        ))
      )}

    </div>
  </div>
);

export default Cart;
