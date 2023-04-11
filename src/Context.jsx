import React from "react";
import { useContext, useEffect } from "react";

const AppContext = React.createContext();

const allMealsUrl = "www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "www.themealdb.com/api/json/v1/1/random.php";

const fetchData = async () => {
	try {
		const res = await fetch("https://randomuser.me/api/");
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

const AppProvider = ({ children }) => {
	useEffect(() => {
		fetchData();
	}, []);
	return <AppContext.Provider value="test-1">{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
