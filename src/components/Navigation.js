import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';


//set 5 import Cart Context
import { CartContext } from '../contexts/CartContext'

const Navigation = props => {
	//console.log("Navigation props: ",props)
	const { cart } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
