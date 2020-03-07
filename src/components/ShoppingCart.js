import React, {useContext} from 'react';
//set 5 import Cart Context
import { CartContext } from '../contexts/CartContext'


// Components
import Item from './ShoppingCartItem';



const ShoppingCart = () => {

	//console.log("ShoppingCart props: ",props)
	const { cart } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
