import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export const Prueba = () => {
	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-danger dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Action
			</button>
			<div className="dropdown-menu">
				<a>Action</a>
				<a>Another action</a>
			</div>
		</div>
	);
};
