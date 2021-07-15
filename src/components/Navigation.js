import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import storeContext from './../contexts/storeContext'



const Navigation = () => {
const { cart } = useContext(storeContext)

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
