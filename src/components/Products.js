//step 4 import useContext and ProductsContext
import React, {useContext} from 'react'
import {ProductContext} from '../contexts/ProductsContext'

// Components
import Product from './Product';

const Products = () => {
	//step4-2
	const { products, addItem } = useContext(ProductContext);
	return (
    <div className="products-container">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addItem={addItem}
        />
      ))}
    </div>
  );
};

export default Products;
