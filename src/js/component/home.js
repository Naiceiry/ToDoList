import React, { useState } from "react";
import "../../styles/index.scss";
import { element } from "prop-types";
import { Tarea } from "./tarea";
export function Home() {
	const [valorimp, setValorimp] = useState("Introduzca Tarea aqui!");
	const [todos, setTodos] = useState(["Sin Tareas Pendientes"]);
	const [contar, setContar] = useState([0]);
	const listItems = todos.map((item, index) => (
		<div className="list" key={index}>
			{item}
			<button
				id="hecho"
				type="button"
				className="btn btn-light"
				onClick={hecho}>
				✔
			</button>
			<button
				id="eliminar"
				type="button"
				className="btn btn-light"
				onClick={eliminar}>
				⛔
			</button>
		</div>
	));
	function hecho() {
		alert("Deberia Tachar");
	}
	function eliminar() {
		alert("Deberia eliminar");
	}
	/*const eliminar= todos => {
        const removearr=[...todos].filter{todos => todos.item !== item}
        setTodos{removearr}
		alert("Deberia elmininar");
	}*/
	let changeInput = e => {
		setValorimp(e.target.value);
	};
	let handerKey = e => {
		if (e.key === "Enter") {
			if (valorimp === "Introduzca Tarea aqui!" || valorimp === "") {
				alert("Introduzca Tarea");
			} else {
				setTodos([...todos, e.target.value]);
				setContar([contar + 1]);
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
