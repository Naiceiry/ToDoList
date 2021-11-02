import React, { useState } from "react";
import "../../styles/index.scss";
import { Crossedout } from "./crossedout";
export function Home() {
	const [valorimp, setValorimp] = useState("Introduzca Tarea aqui!");
	const [todos, setTodos] = useState([]);
	const listItems = todos.map((item, index) => {
		return (
			<Crossedout
				key={index}
				item={item}
				index={index}
				eliminar={e => eliminar(e)}
				setTachado={e => setTachado(e)}></Crossedout>
		);
	});
	const eliminar = indexitem => {
		const removearr = todos.filter((item, index) => {
			return index !== indexitem;
		});
		setTodos(removearr);
	};
	const setTachado = indexitem => {
		const tachearr = todos.filter((item, index) => {
			return index !== indexitem;
		});
		setTodos(tachearr);
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
				setValorimp(" ");
			}
		}
	};
	return (
		<div className="text-center mt-5">
			<h1>ToDo</h1>
			<h1>lista de Tareas</h1>
			<h1>tiene {listItems.length} Tareas</h1>
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
