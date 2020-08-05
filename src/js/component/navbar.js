import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<ul className="list-group">
				{store.favorites.map((item, index) => {
					console.log(item);
					return (
						<li className="list-group-item" key={index} onClick={() => actions.removeFavorite(item)}>
							{item}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

/*  
	<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
					Dropdown Example
					<span className="caret" />
				</button>
				<span>
					<ul className="dropdown-menu">
						{store.favorites.map((item, index) => {
							console.log(item);
							return (
								<li className="list-group-item" key={index}>
									{item}
								</li>
							);
						})}
					</ul>
				</span>
			</div>*/
