import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Cardplanets } from "../component/cardPlanets";
import React, { useState, useEffect, useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h2 className="tit">Characters</h2>

				<div className="list-group list-group-horizontal">
					{store.characters.map((e, index) => {
						return <Card key={index} id={index + 1} name={e.name} height={e.height} url={e.url} />;
					})}
				</div>
				<br />
				<h2 className="tit">Planets</h2>

				<div className="list-group list-group-horizontal">
					{store.planets.map((e, index) => {
						return <Cardplanets key={index} id={index + 1} name={e.name} climate={e.climate} url={e.url} />;
					})}
				</div>
			</div>
		</>
	);
};

/* 16 //className="row"
*/
