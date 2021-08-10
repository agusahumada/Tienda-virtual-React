import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./components/components.css";

function App() {
  //Make product list
  const [products, setProduct] = useState([
    { id: 1, name: "Curso ReactJS", price: 100 },
    { id: 2, name: "Curso NodeJS", price: 150 },
    { id: 3, name: "Curso VuelJS", price: 100 },
    { id: 4, name: "Curso Angular", price: 100 },
  ]);

  const [cart, addProduct] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment className="header">
      <Header titulo="TIENDA VIRTUAL"/>
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
