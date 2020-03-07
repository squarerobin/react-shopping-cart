import React, {useContext} from 'react'
import { CartItemContext } from '../contexts/CartItemContext';

const Item = () => {
	//console.log("ShoppingCartItem props: ", props)
		const { image,title,price,removeItem } = useContext(CartItemContext);

	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button onClick={()=>removeItem(item)}>Remove from cart</button>
			</div>
		</div>
	)
}

export default Item
