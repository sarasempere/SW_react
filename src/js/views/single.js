import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { View } from "../component/view";
import { withRouter } from "react-router-dom";
import "../../styles/single.scss";

export const Single = () => {
	const { store, actions } = useContext(Context);
	//let URLactual = window.location.pathname;
	//let res = parseInt(URLactual.charAt(8) + URLactual.charAt(9));
	//let resf = res - 1;
	const { theid } = useParams();
	const chId = theid - 1;
	console.log(theid);

	return (
		<div className="jumbotron">
			<View name={store.characters[chId].name} id={theid} />
		</div>
	);
};

//Then inside your component const { id } = useParams();

/*	

	<View name={store.characters[resf].name} id={res} />

Single.propTypes = {
	match: PropTypes.object
};
{store.characters.map((e, index) => {
						return <View key={index} id={index + 1} name={e.name} height={e.height} url={e.url} />;
                    })}




//This will show the char element: {store.characters[props.match.params.theid].name}*/
