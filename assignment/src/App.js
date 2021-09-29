import React from 'react';
import Product from './Product';
import Details from './ProductDataAPI';
import Header from './Header';

const App = () => {
    return (
        <>
          <Header />
           <Product  Details={Details}/>
        </>
    )
}

export default App;
