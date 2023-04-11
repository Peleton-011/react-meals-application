import React from "react";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const fetchMeals = async (url) => {
		setLoading(true);
		try {
			const res = await axios(url);
			const fetchedMeals = res.data.meals;
			setMeals(fetchedMeals || []);
		} catch (err) {
			console.error(err.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMeals(`${allMealsUrl}${searchTerm || "a"}`);
	}, [searchTerm]);
	return (
		<AppContext.Provider value={{ loading, meals, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
