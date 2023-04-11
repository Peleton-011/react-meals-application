import React from "react";
import { useContext, useEffect } from "react";

import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const fetchMeals = async (url) => {
	try {
		const res = await axios(url);
		console.log(res);
	} catch (err) {
		console.error(err);
	}
};

const AppProvider = ({ children }) => {
	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);
	return <AppContext.Provider value="test-1">{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
