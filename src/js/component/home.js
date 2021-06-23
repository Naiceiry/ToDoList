import React, { useState } from "react";
import "../../styles/index.scss";
import { element } from "prop-types";
export function Home() {
	const [valorimp, setValorimp] = useState("Introduzca Tarea aqui!");
	const [todos, setTodos] = useState([""]);
	const [tachado, setTachado] = useState(false);
	const [contar, setContar] = useState(0);
	const listItems = todos.map((item, index) => (
		<div
			className={tachado === false ? "list" : "list tachado"}
			key={index}>
			{item}
			<button
				id="hecho"
				type="button"
				className="btn btn-light"
				onClick={() => hecho(index)}>
				✔
			</button>
			<button
				id="eliminar"
				type="button"
				className="btn btn-light"
				onClick={() => eliminar(index)}>
				⛔
			</button>
		</div>
	));
	const hecho = indexitem => {
		const tachar = todos.map((item, index) => {
			if (contar > 0) {
				setContar(contar - 1);
			}
			if (index === indexitem) {
				setTachado(true);
			} else {
				setTachado(false);
			}
		});
		//		setTodos(tachar => tachar);
	};
	const eliminar = indexitem => {
		const removearr = todos.filter((item, index) => {
			if (contar > 0) {
				setContar(contar - 1);
			}
			return index !== indexitem;
		});
		setTodos(removearr);
	};
	let changeInput = e => {
		setValorimp(e.target.value);
	};
	let handerKey = e => {
		if (e.key === "Enter") {
			if (valorimp === "Introduzca Tarea aqui!" || valorimp === "") {
				alert("Introduzca Tarea");
			} else {
				setTodos([...todos, e.target.value]);
				setContar(contar + 1);
				setValorimp(" ");
			}
		}
	};
	return (
		<div className="text-center mt-5">
			<h1>ToDo</h1>
			<h1>lista de Tareas</h1>
			<h1>tiene {contar} Tareas</h1>
			<div className="separator text-center mt-5">
				<input
					autoFocus
					type="text"
					className="form-control"
					id="tarea"
					onChange={changeInput}
					onKeyPress={handerKey}
					value={valorimp}></input>
				<div className="lista">{listItems}</div>
			</div>
		</div>
	);
}
