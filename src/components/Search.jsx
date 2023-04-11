import React from "react";

import { useGlobalContext } from "../Context";
import { useState } from "react";

const Search = () => {
	const { setSearchTerm } = useGlobalContext();

	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(text);
	};

	return (
		<header className="search-container">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					className="form-input"
					value={text}
					placeholder="Spaghetti Carbonara"
					onChange={onChange}
				/>
				<button className="btn" type="submit">
					Search
				</button>
				<button className="btn btn-hipster" type="btn">
					I'm feeling lucky!
				</button>
			</form>
		</header>
	);
};

export default Search;
