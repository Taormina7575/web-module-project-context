import React, { useContext } from 'react';
import storeContext from './../contexts/storeContext'


// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(storeContext)

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
