import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starw from "../../img/starw.jpg";
import info from "../../img/SWinfo.png";

export const View = l => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card w-75 large">
			<img src={info} className="info" alt="..." />
			<div className="card-header">Info adicional</div>
			<div className="card-body">
				<h5 className="card-title">Name: {l.name}</h5>
				<p>Character Nº: {l.id}</p>
				<blockquote className="blockquote mb-0">
					<p>
						Bacon ipsum dolor amet jerky pork chop strip steak chicken. Tri-tip meatball bacon kielbasa
						landjaeger. Porchetta sausage drumstick, pork belly turkey biltong shoulder kevin boudin
						burgdoggen chicken brisket. Burgdoggen tri-tip filet mignon brisket kevin. T-bone chicken boudin
						burgdoggen, frankfurter pork belly capicola meatloaf tail tri-tip. Tongue boudin bacon leberkas
						turkey pig, cow cupim shank sausage alcatra tail brisket. Sausage short ribs shoulder jowl
						prosciutto strip steak biltong.
					</p>
				</blockquote>
				<Link to={"/"}>
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

/*	<div className="card">
			<img src={starw} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Name: {l.name}</h5>
				<p>My index in char Arr: {l.id}</p>
				<p className="card-text">
					Bacon ipsum dolor amet shankle beef pancetta, andouille salami corned beef fatback jerky leberkas
					pork belly. Prosciutto pork loin buffalo pastrami chuck tenderloin. Beef andouille swine bresaola
					cow chuck flank kielbasa chicken. Bacon shankle pork chop capicola beef, tri-tip jerky cow flank
					spare ribs.
				</p>
				<Link to={"/"}>
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div> */
