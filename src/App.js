import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';


function App() {

  //Make 
  const [ products, setProduct ] = useState([
    {id: 1, name: 'Curso ReactJS', price: 100},
    {id: 2, name: 'Curso NodeJS', price: 150},
    {id: 3, name: 'Curso VuelJS', price: 100},
    {id: 4, name: 'Curso Angular', price: 100},
  ]);



  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo = 'Tienda Virtual'
      />
      <Footer
        fecha = {fecha}
      />
      {products.map(product => (
        <Product 
          key = {product.id}
          product = {product}
        />
      ))}

    </Fragment>
  );
}

export default App;
