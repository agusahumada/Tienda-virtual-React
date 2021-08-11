import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./components/components.css";

function App() {
  //Make product list
  const [products, setProduct] = useState([
    { id: 1, name: "Curso ReactJS", price: 9.99 },
    { id: 2, name: "Curso NodeJS", price: 9.99 },
    { id: 3, name: "Curso VuelJS", price: 9.99 },
    { id: 4, name: "Curso Angular", price: 9.99 },
  ]);

  const [cart, addProduct] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="TIENDA VIRTUAL" className="bg-light"/>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          addProduct={addProduct}
        />
      ))}
      <Cart cart={cart} addProduct={addProduct} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
