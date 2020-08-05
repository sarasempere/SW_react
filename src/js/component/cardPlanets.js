import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starw from "../../img/starw.jpg";

export const Cardplanets = l => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-sm-3 m-2">
			<div className="card">
				<img src={starw} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">name: {l.name}</h5>
					<h5 className="card-title">climate: {l.climate}</h5>
					<p className="card-text">Hace frio en invierno y calor en verano</p>
					<Link to={"/single/" + l.id}>
						<button className="btn btn-primary">Info</button>
					</Link>
					<span
						onClick={() => {
							actions.addFavorites(l.name);
							//console.log(store.favorites);fav={store.favorites.name}
						}}
						type="button"
						id="fav"
						className="btn btn-outline-warning fab fa-gratipay"
					/>
				</div>
			</div>
		</div>
	);
};
