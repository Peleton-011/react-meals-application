import React from "react";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([]);

	const fetchMeals = async (url) => {
		try {
			const res = await axios(url);
			setMeals(res.data.meals);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);
	return (
		<AppContext.Provider value={{ meals }}>{children}</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
