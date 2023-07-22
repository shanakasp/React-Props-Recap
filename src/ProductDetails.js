// ProductDetails.js
import React from 'react';
import Product from './Product';

function ProductDetails() {
  return (
    <div>
      <Product name="Amazon" description="Online Platform" price={60} />
      <Product name="Apple" description="Best Product" price={600} />
      <Product name="Asus" description="Computers" price={1000} />
    </div>
  );
}

export default ProductDetails;
