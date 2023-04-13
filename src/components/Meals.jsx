import React from "react";

import { useContext } from "react";
import { useGlobalContext } from "../Context";

import Meal from "./Meal";
import Loading from "./Loading";
import NoResult from "./NoResult";

const Meals = () => {
	const {loading, meals, selectMeal, addToFavorites} = useGlobalContext();
	return (
		<section className="section-center">
			{loading ? (
				<Loading />
			) : meals.length < 1 ? (
				<NoResult />
			) : (
				meals.map((meal) => (
					<Meal key={meal.idMeal} meal={meal} selectMeal={selectMeal} addFav={addToFavorites} />
				))
			)}
			<div>Forg kinda vibes rn</div>
		</section>
	);
};

export default Meals;
