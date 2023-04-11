import { useState } from "react";
import "./App.css";

import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Favorites />
			<Meals />
			<Modal />
			<Search />
		</div>
	);
}

export default App;
