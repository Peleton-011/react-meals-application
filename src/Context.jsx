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
	const [showModal, setShowModal] = useState(false);
	const [selectedMeal, setSelectedMeal] = useState(null);
	const [favorites, setFavorites] = useState(null);

	const addToFavorites = (idMeal) => {
		const selectedMeal = meals.find((meal) => meal.idMeal === idMeal);
		const alreadyFavorite = favorites.find(
			(meal) => meal.idMeal === idMeal
		);

		if (alreadyFavorite) return;

		const updatedFavorites = [...favorites, selectedMeal];
		setFavorites(updatedFavorites);
	};

	const removeFromFavorites = (idMeal) => {
		const updatedFavorites = favorites.filter(
			(meal) => meal.idMeal !== idMeal
		);
		setFavorites(updatedFavorites);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const selectMeal = (idMeal, favoriteMeal) => {
		let meal;
		meal = meals.find((meal) => meal.idMeal === idMeal);

		setSelectedMeal(meal);
		setShowModal(true);
	};

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

	const fetchRandomMeal = async (url) => {
		fetchMeals(randomMealUrl);
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	useEffect(() => {
		if (!searchTerm) return;
		fetchMeals(`${allMealsUrl}${searchTerm}`);
	}, [searchTerm]);
	return (
		<AppContext.Provider
			value={{
				loading,
				meals,
				setSearchTerm,
				fetchRandomMeal,
				showModal,
				selectMeal,
				selectedMeal,
				closeModal,
				favorites,
				addToFavorites,
				removeFromFavorites,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
