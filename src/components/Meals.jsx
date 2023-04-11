import React from "react";

import { useContext } from "react";
import { useGlobalContext } from "../Context";

import Meal from "./Meal";
import Loading from "./Loading";

const Meals = () => {
	const context = useGlobalContext();
	return (
		<section className="section-center">
			{
                context.loading ? <Loading /> :
            context.meals.map((meal) => (
				<Meal key={meal.idMeal} meal={meal} />
			))}
			<div>Forg kinda vibes rn</div>
		</section>
	);
};

export default Meals;
