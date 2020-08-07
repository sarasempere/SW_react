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
import { array } from "prop-types";
import { Button } from "react-bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			img: [
				{
					name: "Beru Whitesun lars",
					img: beru
				},
				{
					name: "Leia Organa",
					img: Leia
				},
				{
					name: "starw",
					img: starw
				},
				{
					name: "R2-D2",
					img: R2
				},
				{
					name: "C-3PO",
					img: C3
				},
				{
					name: "Obi-Wan Kenobi",
					img: obi
				},
				{
					name: "Darth Vader",
					img: darth
				},
				{
					name: "Biggs Darklighter",
					img: biggs
				},
				{
					name: "Chewbacca",
					img: chiwaca
				},
				{
					name: "Yoda",
					img: yoda
				}
			]
		},
		actions: {
			/* Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
            },*/

			loadAllPeople: async () => {
				//let dataNext = data.next;
				let char = [];
				//let pages = 1;
				let url = "https://swapi.dev/api/people/";
				for (let i = 0; i < 8; i++) {
					let response = await fetch(url);
					let respJson = await response.json();
					console.log(respJson);
					let urlReplace = respJson.next;
					//pages = parseInt(urlReplace.count) / 10;
					url = urlReplace.replace("http", "https");
					respJson.results.map(item => {
						char.push(item);
					});

					console.log(urlReplace);
				}
				setStore({ characters: char });
			},
			loadAllPlanets: async () => {
				//let dataNext = data.next;
				let plan = [];
				let url = "https://swapi.dev/api/planets/";
				for (let i = 0; i < 5; i++) {
					let response = await fetch(url);
					let respJson = await response.json();
					let urlReplace = respJson.next;
					url = urlReplace.replace("http", "https");
					respJson.results.map(item => {
						plan.push(item);
					});

					console.log(urlReplace);
				}
				setStore({ planets: plan });
			},

			favSelectButton: props => {
				console.log(props);

				//document.getElementById("idnum").background.color = "red";
				//name.setAttribute("disabled", "false");
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			filterPeople: item => {
				const store = getStore();
				const itemToLowerCase = item.toLowerCase();
				let contain = [];
				const exist = store.characters.map(fav => {
					let name = fav.name.toLowerCase();
					if (name.indexOf(itemToLowerCase) !== -1) {
						contain.push(fav);
						return setStore({ characters: contain });
					}
				});
			},

			addFavorites: (name, button) => {
				const store = getStore();
				const exist = store.favorites.filter(fav => fav === name);
				if (exist.length === 0) {
					return setStore({ favorites: [...store.favorites, name] });
				}
				button.classList.add("active");
				console.log(event);
			},

			removeFavorite: name => {
				const store = getStore();
				const exist = store.favorites.filter(item => item != name);
				console.log(exist);
				setStore({ favorites: exist });
			}

			//reset the global store
		}
	};
};

export default getState;

/*	loadAllPeople: () => {
				//const url = "https://swapi.dev/api/people/?page=";
				let dataNext = data.next;
				let char = [];
				let counter = 1;
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						//this.setState({ tareas: data });

						do {
							fetch("https://swapi.dev/api/people/?page=" + counter)
								.then(resp => {
									return resp.json();
								})
								.then(data => {
									char.push(data.results);
									dataNext = data.next;
									counter++;
								});
						} while (dataNext !== null);

						setStore({ characters: char });
					})
					.catch(error => {
						//error handling
						//console.log(error);
						return error;
					});
            },


            loadPeople: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						//this.setState({ tareas: data });
						setStore({ characters: data.results }); //ojo con poner this, pq peta y no tira, no setea el estado.
					})
					.catch(error => {
						//error handling
						//console.log(error);
						return error;
					});
            },


			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						//this.setState({ tareas: data });
						setStore({ planets: data.results }); //ojo con poner this, pq peta y no tira, no setea el estado.
					})
					.catch(error => {
						//error handling
						//console.log(error);
						return error;
					});
			},

*/
