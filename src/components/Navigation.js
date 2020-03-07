import React from 'react';
import { NavLink } from 'react-router-dom';

//set 5 import Cart Context
import { CartContext } from '../contexts/CartContext'

const Navigation = props => {
	console.log("Navigation props: ",props)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
