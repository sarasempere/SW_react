import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div>
				<input type="text" id="filterchar" onChange={e => actions.filterPeople(e.target.value)} />
				<button type="button" className="btn btn-primary" onClick={() => actions.loadAllPeople()}>
					Delete filter
				</button>
			</div>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						console.log(item);
						return (
							<Dropdown.Item
								className="list-group-item"
								key={index}
								onClick={() => actions.removeFavorite(item)}>
								{item}
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};

/*  
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
/*<Dropdown>
	<Dropdown.Toggle variant="success" id="dropdown-basic">
		Dropdown Button
	</Dropdown.Toggle>

	<Dropdown.Menu>
		{store.favorites.map((item, index) => {
			console.log(item);
			return (
				<Dropdown.Item className="list-group-item" key={index}>
					{item}
				</Dropdown.Item>
			);
		})}
	</Dropdown.Menu>
</Dropdown>;*/
