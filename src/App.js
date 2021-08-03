import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
      <Header
        titulo = 'Tienda Virtual'
      />
      <Footer/>
    </Fragment>
  );
}

export default App;
