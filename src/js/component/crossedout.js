import React, { useState } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";
export function Crossedout(props) {
	const [tachado, setTachado] = useState(false);
	return (
		<div className={tachado === false ? "list" : "list tachado"}>
			{props.item}
			<button
				id="hecho"
				type="button"
				className="btn btn-light"
				onClick={() => props.setTachado(!tachado)}>
				✔
			</button>
			<button
				id="eliminar"
				type="button"
				className="btn btn-light"
				onClick={() => props.eliminar(props.index)}>
				⛔
			</button>
		</div>
	);
}
Crossedout.propTypes = {
	item: PropTypes.string,
	index: PropTypes.number,
	eliminar: PropTypes.func,
	setTachado: PropTypes.func
};
