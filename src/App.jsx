import { useState } from "react";
import "./App.css";

import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

import { useGlobalContext } from "./Context";

function App() {
	const [count, setCount] = useState(0);

	const { showModal } = useGlobalContext();

	return (
		<div className="App">
			<Search />
			{/* <Favorites /> */}
			<Meals />
			{showModal && <Modal />}
		</div>
	);
}

export default App;
