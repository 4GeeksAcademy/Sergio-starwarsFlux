import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Hello {store.nombre}</h1>

			<button
				type="button"
				onClick={actions.cambiarNombre}
				className="btn btn-warning">Cambiar Nombre</button>


			<div>
				{store.characters.map(character => (
					<div>
						<p>{character.name}</p>
						<img src={character.image} />
					</div>
				))}
			</div>
		</div>
	);
}
