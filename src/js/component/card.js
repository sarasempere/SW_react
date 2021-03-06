import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "../component/button";
import { ActiveButton } from "../component/activebutton";
import beru from "../../img/Beru.jpg";
import Leia from "../../img/Leia.jpg";
import starw from "../../img/starw.jpg";
import obi from "../../img/Obi-Wan Kenobi.jpg";
import R2 from "../../img/R2-D2.jpg";
import C3 from "../../img/C-3PO.jpg";
import darth from "../../img/Darth Vader.jpg";
import biggs from "../../img/Biggs Darklighter.jpg";
import chiwaca from "../../img/chiwaca.jpg";
import yoda from "../../img/yoda.jpg";

export const Card = l => {
	const { store, actions } = useContext(Context);

	const charImg = store.img.filter(im => im.name == l.name);
	//console.log(charImg);

	return (
		<div className="col-sm-3 m-2">
			<div className="card">
				<img src={charImg.length > 0 ? charImg[0].img : starw} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">name: {l.name}</h5>
					<h5 className="card-title">height: {l.height}</h5>
					<p className="card-text">A Maricarmen le mola SW</p>
					<Link to={"/single/" + l.id}>
						<button className="btn btn-primary">Info</button>
					</Link>
					<Button name={l.name} id={l.id} />
				</div>
			</div>
		</div>
	);
};
