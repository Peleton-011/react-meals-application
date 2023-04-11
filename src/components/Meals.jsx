import React from "react";

import { useContext } from "react";
import { useGlobalContext } from "../Context";

import Meal from "./Meal";

const Meals = () => {
	const context = useGlobalContext();
	return (
		<section className="section-center">
			{context.meals.map((meal) => (
				<Meal key={meal.idMeal} meal={meal} />
			))}
			<div>Forg kinda vibes rn</div>
		</section>
	);
};

export default Meals;
