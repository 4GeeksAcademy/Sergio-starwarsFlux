const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Almacen de variables
			nombre: "Maxi Ventilador",
			characters: []

		},
		actions: {
			// Almacen de funciones
			cambiarNombre: () => {
				const nombreNuevo = "maximiliano messi"
				setStore({ nombre: nombreNuevo })
			},

			getCharacters: () => {
				fetch('https://rickandmortyapi.com/api/character')
					.then(response => response.json())
					.then(data => {
						setStore({ characters: data.results })
						console.log(data.results)
					})
			},

			// addFavorite()
			// operador spread

			// removeFavorite()
			// filter


		}
	};
};

export default getState;
