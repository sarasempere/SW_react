import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "./navbar";

export const ActiveButton = l => {
	const { store, actions } = useContext(Context);
	console.log(l);

	return (
		<button
			onClick={() => {
				actions.addFavorites(l.name); //
				//console.log(store.favorites);fav={store.favorites.name}}
				// actions.favSelectButton(l.name);
			}}
			type="button"
			id={l.id}
			className="btn btn-outline-warning fab fa-gratipay"
			//disabled
		/>
	);
};
